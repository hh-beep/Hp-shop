import cottonTshirt from  "../../images/tshirts/cotton-tshirt.png"
import polyesterTshirt from  "../../images/tshirts/polyester-tshirt.png"

const value = "Variado"

const data__tshirts = [
  {
    id: 0,
    category: "TSHIRT",
    price: value,
    image: cottonTshirt,
    tittle: "Camisa de Algodão"
  },
  {
    id: 1,
    category: "TSHIRT",
    price: value,
    image: cottonTshirt,
    tittle: "Estampa em Algodão"
  },

  {
    id: 2,
    category: "TSHIRT",
    price: value,
    image: polyesterTshirt,
    tittle: "Camisa de Poliester"
  },
  {
    id: 3,
    category: "TSHIRT", 
    price: value,
    image: polyesterTshirt,
    tittle: "Estampa em Poliester"
  }
]

function returnDtshirts() {
  return data__tshirts;
}

export default returnDtshirts;