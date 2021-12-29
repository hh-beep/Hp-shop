import cocktailGoblet from "../../images/goblets/cocktail-goblet.png"
import ginGoblet from "../../images/goblets/gin-goblet.png"
import tulipGoblet from "../../images/goblets/tulip-goblet.png"

const data__goblet = [
  {
    id: 0,
    category: "GOBLET",
    price: 31.99,
    image: ginGoblet,
    tittle: 'Taça de Gin'
  },
  {
    id: 1,
    category: "GOBLET",
    price: 21.99,
    image: tulipGoblet,
    tittle: 'Taça Tulipa'
  },
  {
    id: 2,
    category: "GOBLET",
    price: 29.99,
    image: cocktailGoblet,
    tittle: 'Taça de Cocktail'
  }
]

export default function returnDgoblets() {
  return data__goblet;
}