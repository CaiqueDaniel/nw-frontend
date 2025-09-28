export class Attributes {
    public readonly Strength: number;
    public readonly Speed: number;
    public readonly Dexterity: number;
    public readonly Vitality: number;
    public readonly Potency: number;
    public readonly Conjuration: number;
    public readonly Control: number;
    public readonly MagicResistance: number;
    public readonly Psyche: number;
    public readonly ResourceType: string;
    public readonly ResourceId: number;

    constructor(props: Props) {
        this.Strength = props.Strength;
        this.Speed = props.Speed;
        this.Dexterity = props.Dexterity;
        this.Vitality = props.Vitality;
        this.Potency = props.Potency;
        this.Conjuration = props.Conjuration;
        this.Control = props.Control;
        this.MagicResistance = props.MagicResistance;
        this.Psyche = props.Psyche;
        this.ResourceType = props.ResourceType;
        this.ResourceId = props.ResourceId;
    }
}

type Props = {
    Strength: number;
    Speed: number;
    Dexterity: number;
    Vitality: number;
    Potency: number;
    Conjuration: number;
    Control: number;
    MagicResistance: number;
    Psyche: number;
    ResourceType: string;
    ResourceId: number;
}