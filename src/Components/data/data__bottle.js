import squeezeBottle from "../../images/bottles/squeeze-bottle.png"
import thermicalBottle from "../../images/bottles/thermical-bottle.png"
import thermicalCup from "../../images/bottles/thermical-cup.png"

const data__bottle = [
  {
    id: 0,
    category: "BOTTLE",
    price: 31.99,
    image: squeezeBottle,
    tittle: "Squeeze de tampa colorida"
  },
  {
    id: 1,
    category: "BOTTLE",
    price: 66.99,
    image: thermicalBottle,
    tittle: "Garrafa Termica"
  },
  {
    id: 2,
    category: "BOTTLE",
    price: 89.99,
    image: thermicalCup,
    tittle: "Copo termico"
  }
]

function returnDbottle() {
  return data__bottle;
}

export default returnDbottle