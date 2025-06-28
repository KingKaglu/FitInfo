import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/Home.css";
import bodybuilder from "../images/builder.webp";

// Images
import WheyProteinIsolate from "../images/WheyProteinIsolate.webp";
import WheyProteinConcentrate from "../images/WheyProteinConcentrate.png";
import caseinprotein from "../images/caseinprotein.jpg";
import PlantBasedProtein from "../images/Plant-BasedProtein.jpg";
import eggprotein from "../images/eggprotein.webp";
import MicronizedCreatine from "../images/MicronizedCreatine.jpg";
import CreatineMonohydrate from "../images/CreatineMonohydrate.avif";
import preworkout1 from "../images/preworkout.avif";
import multivitamincomplex from "../images/MultivitaminComplex.jpg";
import FatBurnerUltra from "../images/FatBurnerUltra.webp";
import bca from "../images/bca.webp";
import bcaaglutemine from "../images/BCAAGlutamine.webp";

// Categories array
const categories = [
  {
    name: "Proteins",
    images: [
      WheyProteinIsolate,
      WheyProteinConcentrate,
      caseinprotein,
      PlantBasedProtein,
      eggprotein,
    ],
  },
  {
    name: "Creatine",
    images: [MicronizedCreatine, CreatineMonohydrate],
  },
  {
    name: "preworkout",
    images: [preworkout1],
  },
  {
    name: "Vitamins",
    images: [multivitamincomplex],
  },
  {
    name: "fatburner",
    images: [FatBurnerUltra],
  },
  {
    name: "BCAAs",
    images: [bca, bcaaglutemine],
  },
];

const Home = () => {
  const [imageIndices, setImageIndices] = useState(categories.map(() => 0));
  const { darkMode: isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prev) =>
        prev.map((index, i) => (index + 1) % categories[i].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle click to redirect to filtered Supplements
  const handleCategoryClick = (categoryName) => {
    const categoryParam = categoryName.toLowerCase().replace(/\s+/g, "");
    navigate(`/supplements?category=${categoryParam}`);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${bodybuilder})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          color: "#fff",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Fuel Your Fitness Journey
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Top-quality supplements trusted by athletes and pros.
          </motion.p>
          <motion.button
            onClick={() => navigate("/supplements")}
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Products
          </motion.button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section" id="categories">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Shop by Category
        </motion.h2>

        <div className="categories-row">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="category-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              onClick={() => handleCategoryClick(cat.name)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={cat.images[imageIndices[idx]]}
                alt={cat.name}
                className="category-img"
              />
              <div className="category-info">
                <h3>{cat.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
