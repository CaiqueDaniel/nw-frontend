import { PropsWithChildren } from 'react';
import { CharacterActionBarContext } from './features/CharacterActionBar/CharacterActionBarContext';
import { useReactRouterRouteNavigator } from '../shared/infra/hooks/useReactRouterRouteNavigator';

export function CharactersProviders({ children }: PropsWithChildren) {
  return (
    <CharacterActionBarContext.Provider
      value={{ navigator: useReactRouterRouteNavigator() }}
    >
      {children}
    </CharacterActionBarContext.Provider>
  );
}
