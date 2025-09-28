import { Character } from "./Character";

export interface CharacterRepository {
    save(entity: Character): Promise<Character>;
    get(id: string): Promise<Character | undefined>;
    all(): Promise<Character[]>;
}