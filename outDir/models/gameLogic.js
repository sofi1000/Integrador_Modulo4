"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCharacter = createCharacter;
exports.listCharacter = listCharacter;
exports.updateCharacter = updateCharacter;
exports.deleteCharacter = deleteCharacter;
exports.assingMission = assingMission;
exports.completeMission = completeMission;
exports.listMissions = listMissions;
exports.updateCharacterLevel = updateCharacterLevel;
const Character_1 = __importDefault(require("../models/Character"));
const characters = [];
const missions = [];
function createCharacter(name, level, health) {
    const character = new Character_1.default(name, level, health, 0);
    characters.push(character);
    return character;
}
function listCharacter() {
    return characters;
}
function updateCharacter(character, name, level, health) {
    if (name)
        character.name = name;
    if (level)
        character.level = level;
    if (health)
        character.health = health;
}
function deleteCharacter(character) {
    const index = characters.indexOf(character);
    if (index !== -1)
        characters.splice(index, 1);
}
function assingMission(character, mission) {
    mission = mission;
}
function completeMission(character) {
}
// El jugador sube de nivel 
// Se ejecuta aleatoriamente cada 1 y 30 segundos y sube de nivel solo si la vida es 100
function updateCharacterLevel(character) {
    return __awaiter(this, void 0, void 0, function* () {
        const timeLevelUp = Math.floor(Math.random() * (30000 - 1000 + 1));
        let newLevel = character.level;
        while (true) {
            yield new Promise(resolve => setTimeout(resolve, timeLevelUp));
            if (character.health === 100) {
                newLevel++;
                updateCharacter(character, character.name, newLevel, character.health);
                console.log(`Level Up!! Tu nuevo nivel es: ${newLevel}`);
            }
        }
    });
}
function listMissions(character) {
    return;
}
