"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("./Character");
class Mage extends Character_1.Character {
    constructor(name, level, health, experience, inventory, magic, mana) {
        super(name, level, health, experience);
        this._magic = magic;
        this._mana = mana;
    }
    get magic() {
        return this._magic;
    }
    set magic(magic) {
        this._magic = magic;
    }
    get mana() {
        return this._mana;
    }
    set mana(mana) {
        this.mana = mana;
    }
}
exports.default = Mage;
