import { Mocked } from "vitest";
import { Character } from "~/modules/characters/domain/Character";
import { CharacterRepository } from "~/modules/characters/domain/CharacterRepository";

export const doubleCharacterRepository: Mocked<CharacterRepository> = {
    save: vi.fn(),
    get: vi.fn(),
    all: vi.fn(),
}

export const mockedCharacter: Character = {
    BreedId: '1',
    ClassId: '1',
    RankingId: 1,
    Name: 'Name',
    Codename: 'Codename',
    Age: 'Age',
    Weight: 'Weight',
    Height: 'Height',
    Personality: 'Personality',
    Appearance: 'Appearance',
    History: 'History',
    Money: 100,
    Level: 1,
    Experience: 100,
    Sanity: 100,
    Attributes: {
        Strength: 10,
        Speed: 10,
        Dexterity: 10,
        Vitality: 10,
        Potency: 10,
        Conjuration: 10,
        Control: 10,
        MagicResistance: 10,
        Psyche: 10,
        ResourceType: 'Mana',
        ResourceId: 1,
    }
}