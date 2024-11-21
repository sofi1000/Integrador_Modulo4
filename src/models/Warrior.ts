import {Character} from './Character'


class Warrior extends Character {
    
    private _attack: number;
    private _defense: number;


    constructor(attack:number,defense:number,name: string, level: number,health:number,experience:number){
        super (name,level,health,experience);
        this._attack= attack;
        this._defense=defense;
    }
    get attack(): number {
        return this._attack
    }
    get defense(): number{
        return this._defense
    }
    set attack(attack:number){
        this.attack = attack
    }
    set defense(defense:number){
        this._defense = defense
    }
}
export default Warrior
