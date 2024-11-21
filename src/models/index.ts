import {createCharacter, listCharacter,updateCharacter,deleteCharacter,updateCharacterLevel, assingMission,completeMission,listMissions} from "./gameLogic";
import Warrior from '../models/Warrior';
import Mage from '../models/Mage';
import MissionType  from "./Mission";

//Crear Personaje
const character1=createCharacter("Jhon Will",1,100);

const character2=createCharacter("Jane Steel",2,100);


console.log('Listar personajes');
console.log(listCharacter());

updateCharacter(character1,"Jhon Will updateCharacter",2,150);
console.log('Actualizar personaje Jhon');
console.log(listCharacter());

deleteCharacter(character1);

console.log('Eliminar personaje Jhon');
console.log(listCharacter());

updateCharacterLevel(character2);