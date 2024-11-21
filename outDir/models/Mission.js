"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = exports.MissionType = void 0;
var MissionType;
(function (MissionType) {
    MissionType["Main"] = "Main";
    MissionType["Side"] = "Side";
    MissionType["Event"] = "Event";
})(MissionType || (exports.MissionType = MissionType = {}));
class Mission {
    constructor(description, difficulty, reward) {
        this._description = description;
        this._difficulty = difficulty;
        this._reward = reward;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    get difficulty() {
        return this._difficulty;
    }
    set difficulty(difficulty) {
        this._difficulty = difficulty;
    }
    get reward() {
        return this._reward;
    }
    set reward(reward) {
        this._reward = reward;
    }
}
exports.Mission = Mission;
exports.default = Mission;
