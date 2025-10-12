import { CharacterFormContext } from '~/modules/characters/features/CharacterForm/CharacterFormContext';
import {
  doubleCharacterRepository,
  mockedCharacter,
} from '../fixtures/doubleCharacterRepository';
import { act, renderHook, waitFor } from '@testing-library/react';
import { useCharacterFormPresenter } from '~/modules/characters/features/CharacterForm/useCharacterFormPresenter';
import { LocalCharacterFactory } from '~/modules/characters/factories/LocalCharacterFactory';
import { doubleNavigator } from '../fixtures/doubleNavigator';

describe('useCharacterFormPresenter', () => {
  const options = { wrapper: Provider };

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('MainFields form', () => {
    it('should be able to render', () => {
      const { result } = renderHook(
        () => useCharacterFormPresenter({}),
        options
      );

      expect(result.current.validation).toBeTruthy();
      expect(result.current.charData).toEqual({
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
      });
    });

    it('should be able to submit', async () => {
      const attrPayload = {
        Sanity: '1',
        Strength: '1',
        Speed: '1',
        Dexterity: '1',
        Vitality: '1',
        Potency: '1',
        Conjuration: '1',
        Control: '1',
        MagicResistance: '1',
        Psyche: '1',
        ResourceType: '1',
        ResourceId: '789',
      };

      const charPayload = {
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
      };

      const payload = {
        ...charPayload,
        ...attrPayload,
      };

      const { result } = renderHook(
        () => useCharacterFormPresenter({}),
        options
      );

      await act(async () => {
        await result.current.onSubmit(payload);
      });

      await waitFor(() => {
        expect(result.current.charData).toEqual(payload);
        expect(doubleCharacterRepository.save).toHaveBeenCalled();
      });
    });

    it('should be able to go back to previous page', async () => {
      const { result } = renderHook(
        () => useCharacterFormPresenter({}),
        options
      );

      result.current.onCancel();
      expect(doubleNavigator.navigateTo).toHaveBeenCalledWith('..');
    });
  });

  it('should be able to load the form', async () => {
    doubleCharacterRepository.get.mockResolvedValue(mockedCharacter);

    const charData = {
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
    };

    const { result } = renderHook(
      () => useCharacterFormPresenter({ characterId: '123' }),
      options
    );

    expect(result.current.isFetching).toBe(true);

    await waitFor(() => {
      expect(result.current.charData).toEqual(charData);
      expect(result.current.isFetching).toBe(false);
      expect(result.current.isSubmiting).toBe(false);
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
          navigator: doubleNavigator,
        }}
      >
        {children}
      </CharacterFormContext.Provider>
    );
  }
});
