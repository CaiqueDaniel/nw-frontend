import { createContext } from "react";
import { OpenModal } from "~/modules/shared/application/OpenModal";
import { useContextHandler } from "~/modules/shared/infra/hooks/useContextHandler";

export const ProductActionBarContext = createContext<Context | undefined>(undefined);

export function useProductActionBarContext() {
    return useContextHandler<Context>(ProductActionBarContext);
}

type Context = {
    openModal: OpenModal
}