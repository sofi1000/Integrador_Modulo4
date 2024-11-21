import Character from '../models/Character';
import Mission from '../models/Mission';
import Mage from '../models/Mage';
import Warrior from '../models/Warrior';
import  MissionType  from '../models/Mission';


const characters:Character[]=[];
const missions:Mission[]=[];

function createCharacter(name:string,level:number,health:number){
    const character = new Character(name,level, health, 0);
    characters.push(character);
    return character;
}

function listCharacter(){
    return characters;
}

function updateCharacter(character:Character,name?:string, level?:number, health?:number){
    if (name) character.name = name;
    if (level) character.level = level;
    if (health) character.health = health;
}

function deleteCharacter(character:Character){
    const index = characters.indexOf(character);
    if (index !== -1)
        characters.splice(index,1)
}
 function assingMission(character:Character, mission:Mission){
    mission = mission;
 }

 function completeMission (character: Character){

 }

 // El jugador sube de nivel 
 // Se ejecuta aleatoriamente cada 1 y 30 segundos y sube de nivel solo si la vida es 100
 async function updateCharacterLevel(character:Character) {
    const timeLevelUp = Math.floor(Math.random() * (30000 - 1000 + 1)); 
    let newLevel = character.level;
    while (true) {
      await new Promise(resolve => setTimeout(resolve, timeLevelUp));
  
      if (character.health === 100) {
        newLevel++;
        updateCharacter(character,character.name,newLevel,character.health);
        console.log(`Level Up!! Tu nuevo nivel es: ${newLevel}`);
      }
    }
  }
  

 function listMissions(character: Character){
    return ;
 }
 export{
    createCharacter,
    listCharacter,
    updateCharacter,
    deleteCharacter,
    assingMission,
    completeMission,
    listMissions,
    updateCharacterLevel,
    
 };