
import "../styles/Categories.css";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // ✅ Make sure this path is correct


const categories = [
  {
    name: "Proteins",
    description: `
      Proteins are fundamental for muscle repair, recovery, and growth. They supply amino acids necessary for rebuilding muscle fibers torn during exercise.
      Popular forms include whey (fast-digesting), casein (slow-digesting), and plant-based blends (for vegan-friendly options).
      A balanced protein intake supports muscle hypertrophy, immune function, and metabolic health.
    `,
  },
  {
    name: "Pre-Workout",
    description: `
      Pre-workout supplements are designed to enhance energy, focus, and endurance. Common ingredients include caffeine, beta-alanine, citrulline malate, and taurine.
      These compounds increase blood flow, delay fatigue, and sharpen mental clarity.
      For best results, take 20–30 minutes before training. Avoid using it too close to bedtime due to stimulants.
    `,
  },
  {
    name: "Creatine",
    description: `
      Creatine is one of the most researched supplements for strength and power. It helps regenerate ATP—the main energy currency used during short bursts of intense activity.
      It also draws water into muscles, increasing cell volume and potentially aiding muscle growth.
      Creatine monohydrate is the most effective and affordable form.
    `,
  },
  {
    name: "Vitamins",
    description: `
      Vitamins support countless bodily functions including immune defense, bone health, skin health, and energy production.
      Athletes often require higher amounts due to physical stress.
      Key vitamins include Vitamin D (bone, immunity), B-complex (energy metabolism), and C & E (antioxidants).
    `,
  },
  {
    name: "Fat Burners",
    description: `
      Fat burners are formulated to aid weight loss by boosting metabolism, reducing appetite, or enhancing energy expenditure.
      Typical ingredients include caffeine, green tea extract, L-carnitine, and capsaicin.
      These supplements should support a well-structured diet and exercise plan—not replace it.
    `,
  },
  {
    name: "BCAAs",
    description: `
      Branched-Chain Amino Acids (leucine, isoleucine, and valine) are essential amino acids that play a key role in muscle protein synthesis.
      They help reduce muscle breakdown, support recovery, and may delay fatigue during prolonged workouts.
      BCAAs are particularly useful during fasted training or cutting phases.
    `,
  },
];

const Categories = () => {
  const { darkMode } = useContext(ThemeContext); // ✅ Get darkMode value

  return (
    <div className={`categories-page ${darkMode ? "dark" : ""}`}>
      <h1 className="title">Supplement Categories Explained</h1>
      <div className="category-list">
        {categories.map((cat, idx) => (
          <div className="category-block" key={idx}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
