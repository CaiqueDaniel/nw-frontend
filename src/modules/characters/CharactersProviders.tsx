import { PropsWithChildren } from 'react';
import { CharacterActionBarContext } from './features/CharacterActionBar/CharacterActionBarContext';
import { useReactRouterRouteNavigator } from '../shared/infra/hooks/useReactRouterRouteNavigator';
import { CharacterFormContext } from './features/CharacterForm/CharacterFormContext';
import { LocalCharacterFactory } from './factories/LocalCharacterFactory';
import { doubleCharacterRepository } from '../../../tests/fixtures/doubleCharacterRepository';

export function CharactersProviders({ children }: PropsWithChildren) {
  return (
    <CharacterActionBarContext.Provider
      value={{ navigator: useReactRouterRouteNavigator() }}
    >
      <CharacterFormContext.Provider
        value={{
          factory: new LocalCharacterFactory(),
          repository: {} as any, // doubleCharacterRepository,
        }}
      >
        {children}
      </CharacterFormContext.Provider>
    </CharacterActionBarContext.Provider>
  );
}
