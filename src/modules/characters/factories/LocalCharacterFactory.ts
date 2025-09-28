import { Character } from "../domain/Character";
import { CharacterFactory, CharacterFormData } from "../domain/CharacterFactory";

export class LocalCharacterFactory implements CharacterFactory {
    create(data: CharacterFormData): Character {
        return new Character({
            BreedId: data.BreedId,
            ClassId: data.ClassId,
            RankingId: data.RankingId ? Number(data.RankingId) : undefined,
            Name: data.Name,
            Codename: data.Codename,
            Age: data.Age,
            Weight: data.Weight,
            Height: data.Height,
            Personality: data.Personality,
            Appearance: data.Appearance,
            History: data.History,
            Money: Number(data.Money),
            Level: Number(data.Level),
            Experience: Number(data.Experience),
            Sanity: Number(data.Sanity),
            Attributes: {
                Strength: Number(data.Attributes.Strength),
                Speed: Number(data.Attributes.Speed),
                Dexterity: Number(data.Attributes.Dexterity),
                Vitality: Number(data.Attributes.Vitality),
                Potency: Number(data.Attributes.Potency),
                Conjuration: Number(data.Attributes.Conjuration),
                Control: Number(data.Attributes.Control),
                MagicResistance: Number(data.Attributes.MagicResistance),
                Psyche: Number(data.Attributes.Psyche),
                ResourceType: data.Attributes.ResourceType,
                ResourceId: Number(data.Attributes.ResourceId),
            }
        })
    }
}