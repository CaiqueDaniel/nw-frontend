import { createContext } from 'react';
import { useContextHandler } from '../../../shared/infra/hooks/useContextHandler';
import { SaveProduct } from '../../application/SaveProduct';
import { GetProduct } from '../../application/GetProduct';

export const ProductFormContext = createContext<Context | undefined>(undefined);

export function useProductFormContext() {
  return useContextHandler<Context>(ProductFormContext);
}

type Context = {
  saveProduct: SaveProduct;
  getProduct: GetProduct;
};
