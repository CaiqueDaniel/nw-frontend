import { createContext } from "react";
import { RouteNavigator } from "~/modules/shared/application/RouteNavigator";
import { useContextHandler } from "~/modules/shared/infra/hooks/useContextHandler";

export const CharacterActionBarContext = createContext<Context | undefined>(undefined);

export function useCharacterActionBarContext() {
    return useContextHandler<Context>(CharacterActionBarContext);
}

type Context = {
    navigator: RouteNavigator
}