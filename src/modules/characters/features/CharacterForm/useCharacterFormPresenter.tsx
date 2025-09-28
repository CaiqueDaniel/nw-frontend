import { useEffect, useState } from 'react';
import { useCharacterFormContext } from './CharacterFormContext';
import { CharacterFormData } from '../../domain/CharacterFactory';
import { number, object, string } from 'yup';
import { Character } from '../../domain/Character';
import {
  AttributesSectionFormData,
  CharacterSectionFormData,
} from './CharacterFormData';

export function useCharacterFormPresenter({ characterId }: Props) {
  const { factory, repository } = useCharacterFormContext();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [charData, setCharData] =
    useState<CharacterSectionFormData>(emptyCharValues);
  const [attributesData, setAttributesData] =
    useState<AttributesSectionFormData>(emptyAttributesValues);

  const onSubmitCharSection = (values: CharacterSectionFormData) => {
    setCharData(values);
  };

  const onSubmitAttrSection = async (values: AttributesSectionFormData) => {
    setAttributesData(values);
    await onSubmit({ ...charData, Attributes: values });
  };

  useEffect(() => {
    if (!characterId) return;

    setIsFetching(true);

    repository
      .get(characterId)
      .then((result) => {
        if (result) {
          setCharData(mapToCharData(result));
          setAttributesData(mapToAttrData(result));
        }
      })
      .catch(console.error)
      .finally(() => setIsFetching(false));
  }, [characterId]);

  return {
    isSubmiting,
    isFetching,
    validationMain,
    validationAttributes,
    attributesData,
    charData,
    onSubmitCharSection,
    onSubmitAttrSection,
    onSubmit,
  };

  async function onSubmit(values: CharacterFormData) {
    setIsSubmiting(true);

    try {
      await repository.save(factory.create(values));
    } catch (error) {
      console.error(error);
    }

    setIsSubmiting(false);
  }

  function mapToCharData(character: Character): CharacterSectionFormData {
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
    };
  }

  function mapToAttrData(character: Character): AttributesSectionFormData {
    return {
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
    };
  }
}

const emptyCharValues: CharacterSectionFormData = {
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
};

const emptyAttributesValues = {
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
};

const validationMain = object({
  BreedId: string().required('Campo obrigatório'),
  ClassId: string().required('Campo obrigatório'),
  RankingId: string().required('Campo obrigatório'),
  Name: string()
    .required('Campo obrigatório')
    .max(255, 'Máximo de 255 caracteres'),
  Codename: string().max(255, 'Máximo de 255 caracteres'),
  Age: number().min(1, 'Valor mínimo de 1').integer('Apenas números inteiros'),
  Weight: number().min(0.01, 'Valor mínimo de 0.01'),
  Height: number().min(0.01, 'Valor mínimo de 0.01'),
  Personality: string().max(255, 'Máximo de 255 caracteres'),
  Appearance: string().max(25000, 'Máximo de 25000 caracteres'),
  History: string().max(25000, 'Máximo de 25000 caracteres'),
  Money: number().required('Campo obrigatório'),
  Level: number()
    .required('Campo obrigatório')
    .min(1, 'Valor mínimo de 1')
    .integer('Apenas números inteiros'),
  Experience: number()
    .required('Campo obrigatório')
    .min(1, 'Valor mínimo de 1')
    .integer('Apenas números inteiros'),
  Sanity: number()
    .required('Campo obrigatório')
    .min(1, 'Valor mínimo de 1')
    .integer('Apenas números inteiros'),
});

const validationAttributes = object({
  Strength: string().required('Campo obrigatório'),
  Speed: string().required('Campo obrigatório'),
  Dexterity: string().required('Campo obrigatório'),
  Vitality: string().required('Campo obrigatório'),
  Potency: string().required('Campo obrigatório'),
  Conjuration: string().required('Campo obrigatório'),
  Control: string().required('Campo obrigatório'),
  MagicResistance: string().required('Campo obrigatório'),
  Psyche: string().required('Campo obrigatório'),
  ResourceType: string().required('Campo obrigatório'),
  ResourceId: string().required('Campo obrigatório'),
});

type Props = {
  characterId?: string;
};
