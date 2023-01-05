import bug from '../assets/Pokedéx/bug.png'
import dark from '../assets/Pokedéx/dark.png'
import dragon from '../assets/Pokedéx/dragon.png'
import electric from '../assets/Pokedéx/electric.png'
import fairy from '../assets/Pokedéx/fairy.png'
import fighting from '../assets/Pokedéx/fighting.png'
import fire from '../assets/Pokedéx/fire.png'
import flying from '../assets/Pokedéx/flying.png'
import ghost from '../assets/Pokedéx/ghost.png'
import grass from '../assets/Pokedéx/grass.png'
import ground from '../assets/Pokedéx/ground.png'
import ice from '../assets/Pokedéx/ice.png'
import normal from '../assets/Pokedéx/normal.png'
import poison from '../assets/Pokedéx/poison.png'
import psychic from '../assets/Pokedéx/psychic.png'
import rock from '../assets/Pokedéx/rock.png'
import steel from '../assets/Pokedéx/steel.png'
import water from '../assets/Pokedéx/water.png'

export const getTypes = (type) => {
    switch (type) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      default:
        return water;
    }
  };