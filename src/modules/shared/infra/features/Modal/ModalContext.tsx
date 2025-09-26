import { createContext } from 'react';
import { useContextHandler } from '../../hooks/useContextHandler';
import { BusSubscriber } from '~/modules/shared/core/application/BusSubscriber';

export const ModalContext = createContext<Context | undefined>(undefined);

export function useModalContext() {
  return useContextHandler<Context>(ModalContext);
}

type Context = {
  bus: BusSubscriber;
};
