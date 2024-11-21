import {createCharacter, listCharacter,updateCharacter,deleteCharacter, assingMission,completeMission,listMissions} from "./gameLogic";
import Warrior from '../models/Warrior';
import Mage from '../models/Mage';
import MissionType  from "./Mission";

//Crear Personaje
const character1=createCharacter("Jhon Will",1,100);

const character2=createCharacter("Jane Steel",2,120);



console.log(listCharacter());

updateCharacter(character1,"Jhon Will updateCharacter",2,150);

console.log(listCharacter());

deleteCharacter;