export interface TraitsService {
    getBreeds(): Promise<TraitData[]>
    getClasses(): Promise<TraitData[]>
    getRankings(): Promise<TraitData[]>
}

export type TraitData = {
    id: number
    name: string
}