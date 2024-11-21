"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("./Character");
class Warrior extends Character_1.Character {
    constructor(attack, defense, name, level, health, experience) {
        super(name, level, health, experience);
        this._attack = attack;
        this._defense = defense;
    }
    get attack() {
        return this._attack;
    }
    get defense() {
        return this._defense;
    }
    set attack(attack) {
        this.attack = attack;
    }
    set defense(defense) {
        this._defense = defense;
    }
}
exports.default = Warrior;
