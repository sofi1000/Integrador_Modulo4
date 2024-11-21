"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = exports.CharacterType = void 0;
var CharacterType;
(function (CharacterType) {
    CharacterType["Warrior"] = "Warrior";
    CharacterType["Mage"] = "Mage";
})(CharacterType || (exports.CharacterType = CharacterType = {}));
let level = "level";
class Character {
    constructor(name, level, health, experience) {
        this._name = name;
        this._level = level;
        this._health = health;
        this._experience = experience;
        this._inventory = [];
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get level() {
        return this._level;
    }
    set level(level) {
        this._level;
    }
    get health() {
        return this._health;
    }
    set health(health) {
        this._health = health;
    }
    get experience() {
        return this._experience;
    }
    set experience(experience) {
        this._experience = experience;
    }
    get inventory() {
        return this._inventory;
    }
    set inventory(inventory) {
        this._inventory = inventory;
    }
}
exports.Character = Character;
exports.default = Character;
