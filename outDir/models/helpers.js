"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateExperience = calculateExperience;
function calculateExperience(character, missionDifficulty) {
    return character.level + missionDifficulty + 10;
}
