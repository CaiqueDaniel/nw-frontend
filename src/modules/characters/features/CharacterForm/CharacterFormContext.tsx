import { createContext } from 'react';
import { useContextHandler } from '../../../shared/infra/hooks/useContextHandler';
import { CharacterRepository } from '../../domain/CharacterRepository';
import { CharacterFactory } from '../../domain/CharacterFactory';

export const CharacterFormContext = createContext<Context | undefined>(
  undefined
);

export function useCharacterFormContext() {
  return useContextHandler<Context>(CharacterFormContext);
}

type Context = {
  repository: CharacterRepository;
  factory: CharacterFactory;
};
