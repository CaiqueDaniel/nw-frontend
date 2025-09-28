import { Attributes } from "./Attributes";

export class Character {
    public readonly BreedId: string;
    public readonly ClassId: string;
    public readonly RankingId?: number;
    public readonly Attributes: Attributes;
    public readonly Name: string;
    public readonly Codename?: string;
    public readonly Age?: string;
    public readonly Weight?: string;
    public readonly Height?: string;
    public readonly Personality?: string;
    public readonly Appearance?: string;
    public readonly History?: string;
    public readonly Money: number;
    public readonly Level: number;
    public readonly Experience: number;
    public readonly Sanity: number;

    constructor(props: Props) {
        this.BreedId = props.BreedId;
        this.ClassId = props.ClassId;
        this.RankingId = props.RankingId;
        this.Attributes = props.Attributes;
        this.Name = props.Name;
        this.Codename = props.Codename;
        this.Age = props.Age;
        this.Weight = props.Weight;
        this.Height = props.Height;
        this.Personality = props.Personality;
        this.Appearance = props.Appearance;
        this.History = props.History;
        this.Money = props.Money;
        this.Level = props.Level;
        this.Experience = props.Experience;
        this.Sanity = props.Sanity;
    }
}

type Props = {
    BreedId: string;
    ClassId: string;
    RankingId?: number;
    Attributes: Attributes;
    Name: string;
    Codename?: string;
    Age?: string;
    Weight?: string;
    Height?: string;
    Personality?: string;
    Appearance?: string;
    History?: string;
    Money: number;
    Level: number;
    Experience: number;
    Sanity: number;
}

export type CharacterFormData = {
    BreedId: string;
    ClassId: string;
    RankingId?: number;
    Attributes: Attributes;
    Name: string;
    Codename?: string;
    Age?: string;
    Weight?: string;
    Height?: string;
    Personality?: string;
    Appearance?: string;
    History?: string;
    Money: number;
    Level: number;
    Experience: number;
    Sanity: number;
};
