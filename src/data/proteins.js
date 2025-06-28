import WheyProteinIsolate from '../images/WheyProteinIsolate.webp'
import WheyProteinConcentrate from '../images/WheyProteinConcentrate.png'
import caseinprotein from '../images/caseinprotein.jpg'
import PlantBasedProtein from '../images/Plant-BasedProtein.jpg'
import eggprotein from '../images/eggprotein.webp'

const proteins = [
  {
    id: 7,
    name: "Whey Protein Isolate",
    type: "whey",
    category: "proteins",
    image: WheyProteinIsolate,
    description: "Fast-digesting protein ideal post-workout for muscle recovery."
  },
  {
    id: 8,
    name: "Whey Protein Concentrate",
    type: "whey",
    category: "proteins",
    image: WheyProteinConcentrate,
    description: "Affordable and effective source of high-quality protein."
  },
  {
    id: 9,
    name: "Casein Protein",
    type: "casein",
    category: "proteins",
    image: caseinprotein,
    description: "Slow-digesting protein great for nighttime muscle repair."
  },
  {
    id: 10,
    name: "Plant-Based Protein",
    type: "plant",
    category: "proteins",
    image: PlantBasedProtein,
    description: "Vegan-friendly protein sourced from peas, rice, and hemp."
  },
  {
    id: 11,
    name: "Egg Protein",
    type: "egg",
    category: "proteins",
    image: eggprotein,
    description: "High biological value and lactose-free protein option."
  }
];
export default proteins;
