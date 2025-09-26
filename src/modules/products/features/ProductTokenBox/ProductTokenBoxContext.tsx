import { createContext } from 'react';
import { TextClipboardService } from '~/modules/shared/application/ClipboardService';
import { useContextHandler } from '~/modules/shared/infra/hooks/useContextHandler';

export const ProductTokenBoxContext = createContext<Context | undefined>(
  undefined
);

export function useProductTokenBoxContext() {
  return useContextHandler(ProductTokenBoxContext);
}

type Context = {
  clipboard: TextClipboardService;
};
