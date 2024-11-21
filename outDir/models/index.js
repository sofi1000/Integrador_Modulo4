"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameLogic_1 = require("./gameLogic");
//Crear Personaje
const character1 = (0, gameLogic_1.createCharacter)("Jhon Will", 1, 100);
const character2 = (0, gameLogic_1.createCharacter)("Jane Steel", 2, 100);
console.log('Listar personajes');
console.log((0, gameLogic_1.listCharacter)());
(0, gameLogic_1.updateCharacter)(character1, "Jhon Will updateCharacter", 2, 150);
console.log('Actualizar personaje Jhon');
console.log((0, gameLogic_1.listCharacter)());
(0, gameLogic_1.deleteCharacter)(character1);
console.log('Eliminar personaje Jhon');
console.log((0, gameLogic_1.listCharacter)());
(0, gameLogic_1.updateCharacterLevel)(character2);
