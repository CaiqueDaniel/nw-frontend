import { useEffect, useState } from 'react';
import { useCharacterFormContext } from './CharacterFormContext';
import { CharacterFormData } from '../../domain/CharacterFactory';
import { mixed, object, string } from 'yup';
import { Character } from '../../domain/Character';

export function useCharacterFormPresenter({ characterId }: Props) {
  const { factory, repository } = useCharacterFormContext();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [initialValues, setInitialValues] =
    useState<CharacterFormData>(emptyValues);

  const onSubmit = async (values: CharacterFormData) => {
    setIsSubmiting(true);

    try {
      await repository.save(factory.create(values));
    } catch (error) {
      console.error(error);
    }

    setIsSubmiting(false);
  };

  useEffect(() => {
    if (!characterId) return;

    setIsFetching(true);

    repository
      .get(characterId)
      .then((result) => {
        if (result) setInitialValues(mapToFormData(result));
      })
      .catch(console.error)
      .finally(() => setIsFetching(false));
  }, [characterId]);

  return {
    initialValues,
    isSubmiting,
    isFetching,
    validation,
    onSubmit,
  };

  function mapToFormData(character: Character): CharacterFormData {
    return {
      BreedId: character.BreedId,
      ClassId: character.ClassId,
      RankingId: character.RankingId ? String(character.RankingId) : '',
      Name: character.Name,
      Codename: character.Codename || '',
      Age: character.Age || '',
      Weight: character.Weight || '',
      Height: character.Height || '',
      Personality: character.Personality || '',
      Appearance: character.Appearance || '',
      History: character.History || '',
      Money: String(character.Money),
      Level: String(character.Level),
      Experience: String(character.Experience),
      Sanity: String(character.Sanity),
      Attributes: {
        Strength: String(character.Attributes.Strength),
        Speed: String(character.Attributes.Speed),
        Dexterity: String(character.Attributes.Dexterity),
        Vitality: String(character.Attributes.Vitality),
        Potency: String(character.Attributes.Potency),
        Conjuration: String(character.Attributes.Conjuration),
        Control: String(character.Attributes.Control),
        MagicResistance: String(character.Attributes.MagicResistance),
        Psyche: String(character.Attributes.Psyche),
        ResourceType: character.Attributes.ResourceType,
        ResourceId: String(character.Attributes.ResourceId),
      },
    };
  }
}

const emptyValues: CharacterFormData = {
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
const validation = object({
  name: string()
    .required('Campo obrigatório')
    .max(255, 'Máximo de 255 caracteres'),
  description: string()
    .required('Campo obrigatório')
    .max(255, 'Máximo de 255 caracteres'),
  address: string()
    .required('Campo obrigatório')
    .max(2000, 'Máximo de 2000 caracteres'),
  cover: mixed().required('Campo obrigatório'),
});

type Props = {
  characterId?: string;
};
