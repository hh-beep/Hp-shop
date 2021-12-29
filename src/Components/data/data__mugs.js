import whiteMug from "../../images/mugs/white-mug.png"
import coloredMug from "../../images/mugs/colored-mug.png"
import spoonMug from "../../images/mugs/spoon-mug.png"
import thermalMug from "../../images/mugs/thermal-mug.png"

const data__mug = [
  {
    id: 0,
    category: "MUG",
    price: 23.99,
    image: whiteMug,
    tittle: "Caneca Branca"
  },

  {
    id: 1,
    category: "MUG",
    price: 25.99,
    image: coloredMug,
    tittle: "Caneca Colorida"
  },

  {
    id: 2,
    category: "MUG",
    price: 29.99,
    image: spoonMug,
    tittle: "Caneca com Colher"
  },

  {
    id: 3,
    category: "MUG",
    price: 42.99,
    image: thermalMug,
    tittle: "Caneca Térmica"
  }
]

function returnDmugs () {
  return data__mug;
}

export default returnDmugs;