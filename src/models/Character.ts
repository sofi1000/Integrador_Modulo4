export enum CharacterType {
    Warrior = 'Warrior',
    Mage ='Mage'

}
let level = "level";


export class Character {
    private _name: string;
    private _level: number;
    private _health: number;
    private _experience: number;
    private _inventory: string[];

    constructor(name: string, level: number, health: number, experience: number){
        this._name = name;
        this._level = level;
        this._health = health;
        this._experience = experience;
        this._inventory = []
    }

    get name():string{
        return this._name;
    }
    set name(name: string){
        this._name=name;
    }
    get level(): number {
        return this._level;
    }
    set level(level:number){
        this._level;
    }
    get health():number{
        return this._health;
    }
    set health(health:number){
        this._health=health;
    }
    get experience():number{
        return this._experience
    }
    set experience(experience:number){
        this._experience=experience
    }
get inventory():string[]{
    return this._inventory
}
set inventory(inventory:string[]){
this._inventory=inventory
}
}
export default Character;


