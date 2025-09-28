import { Character } from "./Character";

export interface CharacterFactory {
    create(data: CharacterFormData): Character;
}

export class CharacterFormData {
    constructor(
        public BreedId: string,
        public ClassId: string,
        public RankingId: string,
        public Name: string,
        public Codename: string,
        public Age: string,
        public Weight: string,
        public Height: string,
        public Personality: string,
        public Appearance: string,
        public History: string,
        public Money: string,
        public Level: string,
        public Experience: string,
        public Sanity: string,
        public Attributes: AttribuitesFormData,
    ) { }
};

export class AttribuitesFormData {
    constructor(
        public Strength: string,
        public Speed: string,
        public Dexterity: string,
        public Vitality: string,
        public Potency: string,
        public Conjuration: string,
        public Control: string,
        public MagicResistance: string,
        public Psyche: string,
        public ResourceType: string,
        public ResourceId: string,
    ) { }
};
