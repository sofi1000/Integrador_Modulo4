import Character from "./Character";

export function calculateExperience(character: Character, missionDifficulty: number): number{
    return character.level + missionDifficulty + 10;
}