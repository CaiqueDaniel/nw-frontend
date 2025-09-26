import { createContext } from 'react';
import { useContextHandler } from '../../../shared/infra/hooks/useContextHandler';
import { ListProducts } from '../../application/ListProducts';
import { BusSubscriber } from '~/modules/shared/core/application/BusSubscriber';
import { OpenProductModalInEditMode } from '../../application/OpenProductModalInEditMode';
import { GetProductUrl } from '../../application/GetProductUrl';

export const ProductListContext = createContext<Context | undefined>(undefined);

export function useProductListContext() {
  return useContextHandler<Context>(ProductListContext);
}

type Context = {
  listProducts: ListProducts;
  openProductModalInEditMode: OpenProductModalInEditMode;
  busSubscriber: BusSubscriber;
  getProductUrl: GetProductUrl;
};
