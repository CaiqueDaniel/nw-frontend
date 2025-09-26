import { apiSlice } from '~/config/rtkquery/apiSlice';
import { ProductCheckoutService } from '../application/ProductCheckoutService';

export function useRTKProductCheckoutGateway(): ProductCheckoutService {
  const { useCreateCheckoutApiSliceMutation } = checkoutApiSlice;
  const [create] = useCreateCheckoutApiSliceMutation();

  return {
    createCheckoutURLForProduct: async (productId) => {
      return (await create(productId).unwrap()).checkoutURL;
    },
  };
}

const checkoutApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCheckoutApiSlice: builder.mutation<{ checkoutURL: string }, string>({
      query: (productId) => ({
        url: `subscriptions`,
        method: 'POST',
        body: { productId },
      }),
    }),
  }),
});
