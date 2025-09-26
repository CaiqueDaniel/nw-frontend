import { apiSlice } from '~/config/rtkquery/apiSlice';
import { ProductRepository } from '../domain/ProductRepository';
import { APIProductResponse } from '../types/APIProductResponse';
import { Product } from '../domain/Product';
import { PaginatedResponse } from '~/modules/shared/types/PaginatedResponse';
import { PayloadMapper } from '~/modules/shared/application/PayloadMapper';
import { APISubscribedProductResponse } from '../types/APISubscribedProductResponse';

export function useRTKProductGateway(
  mapper: PayloadMapper<FormData>
): ProductRepository {
  const {
    useLazyGetProductQuery,
    useLazyGetProductsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
  } = productApiSlice;

  const { useLazyGetSubscribedProductsQuery } = subscribedProductsApiSlice;

  const [rtkList] = useLazyGetProductsQuery();
  const [rtkGet] = useLazyGetProductQuery();
  const [rtkCreate] = useCreateProductMutation();
  const [rtkUpdate] = useUpdateProductMutation();
  const [rtkGetSubscribedProducts] = useLazyGetSubscribedProductsQuery();

  const savedItems = new Set<string>();
  let lastLoadedItems: APIProductResponse[] = [];
  let subscribedProducts: APISubscribedProductResponse[] = [];

  return {
    all: async () => {
      const { items } = await rtkList().unwrap();
      const subscribedProducts = await getSubscribedProducts();
      lastLoadedItems = items;

      return items.map((response) => {
        savedItems.add(response.id);
        return Product.hydrate({
          ...response,
          allowAccess: Boolean(
            subscribedProducts?.find(
              ({ productId }) => productId === response.id
            )
          ),
        });
      });
    },

    save: async (entity) => {
      const payload = {
        name: entity.name,
        description: entity.description,
        address: entity.address,
        cover: entity.currentCover,
      };

      if (savedItems.has(entity.id)) {
        await rtkUpdate({
          id: entity.id,
          body: mapper.transform(payload),
        }).unwrap();

        return entity;
      }

      return Product.hydrate(
        await rtkCreate(mapper.transform(payload)).unwrap()
      );
    },

    get: async (id: string) => {
      const cachedProduct = lastLoadedItems.find((item) => item.id === id);
      const subscribedProducts = await getSubscribedProducts();

      if (cachedProduct)
        return Product.hydrate({
          ...cachedProduct,
          allowAccess: Boolean(
            subscribedProducts?.find(
              ({ productId }) => productId === cachedProduct.id
            )
          ),
        });

      const response = await rtkGet(id).unwrap();

      return Product.hydrate({
        ...response,
        allowAccess: Boolean(
          subscribedProducts?.find(({ productId }) => productId === response.id)
        ),
      });
    },
  };

  async function getSubscribedProducts() {
    if (!subscribedProducts.length)
      subscribedProducts = await rtkGetSubscribedProducts().unwrap();
    return subscribedProducts;
  }
}

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<PaginatedResponse<APIProductResponse>, void>({
      query: () => 'products',
    }),

    getProduct: builder.query<APIProductResponse, string>({
      query: (id) => `products/${id}`,
    }),

    createProduct: builder.mutation<APIProductResponse, FormData>({
      query: (body) => {
        return {
          url: 'products',
          method: 'POST',
          body,
        };
      },
    }),

    updateProduct: builder.mutation<
      APIProductResponse,
      { id: string; body: FormData }
    >({
      query: ({ id, body }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body,
      }),
    }),

    deleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

const subscribedProductsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubscribedProducts: builder.query<APISubscribedProductResponse[], void>({
      query: () => ({
        url: `users/subscriptions`,
        method: 'GET',
      }),
    }),
  }),
});
