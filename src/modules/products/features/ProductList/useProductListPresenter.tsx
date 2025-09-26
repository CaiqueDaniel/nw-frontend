import { useEffect, useState } from 'react';
import { useProductListContext } from './ProductListContext';
import { ListProductsOutput } from '../../application/ListProducts';
import { useBusSubscriber } from '~/modules/shared/infra/hooks/useBusSubscriber';

export function useProductListPresenter() {
  const [rows, setRows] = useState<ListProductsOutput>([]);
  const [productListId, setProductListId] = useState<string>('');
  const {
    listProducts,
    openProductModalInEditMode,
    busSubscriber,
    getProductUrl,
  } = useProductListContext();

  const onClickEditBtn = (id: string) =>
    openProductModalInEditMode.execute({ id });

  const onClickOpenProduct = async (id: string) =>
    location.assign(await getProductUrl.execute({ productId: id }));

  useBusSubscriber({
    bus: busSubscriber,
    eventName: 'product-list-updated',
    handler: () => setProductListId(crypto.randomUUID()),
  });

  useEffect(() => {
    listProducts.execute().then(setRows);
  }, [productListId]);

  return { rows, onClickEditBtn, onClickOpenProduct };
}
