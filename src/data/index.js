// data/index.js
import protein from "./proteins";
import creatine from "./creatine";
import bcaa from "./bcaa";
import preworkout from "./preworkout";
import fatburner from "./fatburner";
import vitamins from "./vitamins";

// Flatten arrays with unique IDs by offsetting IDs for each category
const tagCategory = (arr, correctCategory, idOffset = 0) =>
  arr.map((item, idx) => ({
    ...item,
    id: idOffset + idx + 1,  // assign new unique id
    category: correctCategory.toLowerCase().trim(),
  }));

const allSupplements = [
  ...tagCategory(protein, "proteins", 0),
  ...tagCategory(creatine, "creatine", 1000),
  ...tagCategory(bcaa, "bcaa", 2000),
  ...tagCategory(preworkout, "preworkout", 3000),
  ...tagCategory(fatburner, "fatburner", 4000),
  ...tagCategory(vitamins, "vitamins", 5000),
];

export { allSupplements };
