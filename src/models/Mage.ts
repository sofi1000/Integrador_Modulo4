import { Character } from "./Character";


class Mage extends Character {

private _magic: number;
private _mana: number;

constructor(name: string, level:number, health: number, experience: number, inventory: [], magic:number, mana: number){
    super(name, level, health, experience);
    this._magic = magic;
    this._mana = mana;
}
get magic():number{
    return this._magic
}
set magic(magic: number){
    this._magic=magic;
}
get mana():number{
    return this._mana
}
set mana(mana: number){
    this.mana=mana;
}
}
export default Mage;

