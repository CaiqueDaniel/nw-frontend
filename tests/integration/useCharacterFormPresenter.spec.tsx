import { CharacterFormContext } from '~/modules/characters/features/CharacterForm/CharacterFormContext';
import {
  doubleCharacterRepository,
  mockedCharacter,
} from '../fixtures/doubleCharacterRepository';
import { act, renderHook, waitFor } from '@testing-library/react';
import { useCharacterFormPresenter } from '~/modules/characters/features/CharacterForm/useCharacterFormPresenter';
import { LocalCharacterFactory } from '~/modules/characters/factories/LocalCharacterFactory';

describe('useCharacterFormPresenter', () => {
  const options = { wrapper: Provider };

  describe('create action', () => {
    beforeAll(() => {
      doubleCharacterRepository.get.mockResolvedValue(undefined);
    });

    it('should be able to load the form with empty values', async () => {
      const expectedInitialValues = {
        BreedId: '',
        ClassId: '',
        RankingId: '',
        Name: '',
        Codename: '',
        Age: '',
        Weight: '',
        Height: '',
        Personality: '',
        Appearance: '',
        History: '',
        Money: '',
        Level: '',
        Experience: '',
        Sanity: '',
        Attributes: {
          Strength: '',
          Speed: '',
          Dexterity: '',
          Vitality: '',
          Potency: '',
          Conjuration: '',
          Control: '',
          MagicResistance: '',
          Psyche: '',
          ResourceType: '',
          ResourceId: '',
        },
      };

      const { result } = renderHook(
        () => useCharacterFormPresenter({}),
        options
      );

      expect(result.current.initialValues).toEqual(expectedInitialValues);
      expect(result.current.isFetching).toBe(false);
      expect(result.current.isSubmiting).toBe(false);

      await waitFor(() => {
        expect(result.current.initialValues).toEqual(expectedInitialValues);
        expect(result.current.isFetching).toBe(false);
        expect(result.current.isSubmiting).toBe(false);
      });
    });
  });

  describe('update action', () => {
    beforeAll(() => {
      doubleCharacterRepository.get.mockResolvedValue(mockedCharacter);
    });

    it('should be able to load the form', async () => {
      const expectedInitialValues = {
        BreedId: mockedCharacter.BreedId,
        ClassId: mockedCharacter.ClassId,
        RankingId: String(mockedCharacter.RankingId),
        Name: mockedCharacter.Name,
        Codename: mockedCharacter.Codename,
        Age: mockedCharacter.Age,
        Weight: mockedCharacter.Weight,
        Height: mockedCharacter.Height,
        Personality: mockedCharacter.Personality,
        Appearance: mockedCharacter.Appearance,
        History: mockedCharacter.History,
        Money: String(mockedCharacter.Money),
        Level: String(mockedCharacter.Level),
        Experience: String(mockedCharacter.Experience),
        Sanity: String(mockedCharacter.Sanity),
        Attributes: {
          Strength: String(mockedCharacter.Attributes.Strength),
          Speed: String(mockedCharacter.Attributes.Speed),
          Dexterity: String(mockedCharacter.Attributes.Dexterity),
          Vitality: String(mockedCharacter.Attributes.Vitality),
          Potency: String(mockedCharacter.Attributes.Potency),
          Conjuration: String(mockedCharacter.Attributes.Conjuration),
          Control: String(mockedCharacter.Attributes.Control),
          MagicResistance: String(mockedCharacter.Attributes.MagicResistance),
          Psyche: String(mockedCharacter.Attributes.Psyche),
          ResourceType: String(mockedCharacter.Attributes.ResourceType),
          ResourceId: String(mockedCharacter.Attributes.ResourceId),
        },
      };

      const { result } = renderHook(
        () => useCharacterFormPresenter({ characterId: '123' }),
        options
      );

      expect(result.current.isFetching).toBe(true);

      await waitFor(() => {
        expect(result.current.initialValues).toEqual(expectedInitialValues);
        expect(result.current.isFetching).toBe(false);
        expect(result.current.isSubmiting).toBe(false);
      });
    });
  });

  it('should be able to submit the form', async () => {
    const { result } = renderHook(() => useCharacterFormPresenter({}), options);

    expect(result.current.isSubmiting).toBe(false);

    await act(async () => {
      await result.current.onSubmit({
        BreedId: '123',
        ClassId: '234',
        RankingId: '456',
        Name: 'Name',
        Codename: 'Codename',
        Age: 'Age',
        Weight: 'Weight',
        Height: 'Height',
        Personality: 'Personality',
        Appearance: 'Appearance',
        History: 'History',
        Money: 'Money',
        Level: 'Level',
        Experience: 'Experience',
        Sanity: 'Sanity',
        Attributes: {
          Strength: 'Strength',
          Speed: 'Speed',
          Dexterity: 'Dexterity',
          Vitality: 'Vitality',
          Potency: 'Potency',
          Conjuration: 'Conjuration',
          Control: 'Control',
          MagicResistance: 'MagicResistance',
          Psyche: 'Psyche',
          ResourceType: 'ResourceType',
          ResourceId: '789',
        },
      });
    });

    await waitFor(() => {
      expect(doubleCharacterRepository.save).toHaveBeenCalledTimes(1);
      expect(doubleCharacterRepository.save).toHaveBeenCalledWith({
        BreedId: '123',
        ClassId: '234',
        RankingId: 456,
        Name: 'Name',
        Codename: 'Codename',
        Age: 'Age',
        Weight: 'Weight',
        Height: 'Height',
        Personality: 'Personality',
        Appearance: 'Appearance',
        History: 'History',
        Money: NaN,
        Level: NaN,
        Experience: NaN,
        Sanity: NaN,
        Attributes: {
          Strength: NaN,
          Speed: NaN,
          Dexterity: NaN,
          Vitality: NaN,
          Potency: NaN,
          Conjuration: NaN,
          Control: NaN,
          MagicResistance: NaN,
          Psyche: NaN,
          ResourceType: 'ResourceType',
          ResourceId: 789,
        },
      });
    });
  });

  function Provider({ children }: { children: React.ReactNode }) {
    return (
      <CharacterFormContext.Provider
        value={{
          repository: doubleCharacterRepository,
          factory: new LocalCharacterFactory(),
        }}
      >
        {children}
      </CharacterFormContext.Provider>
    );
  }
});
