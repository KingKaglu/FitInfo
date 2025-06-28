import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { allSupplements } from "../data";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/Supplements.css";

const Supplements = () => {
  const [searchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubType, setSelectedSubType] = useState("all");

  const { darkMode } = useContext(ThemeContext);

  // Apply dark mode styling
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Read query parameters on load
  useEffect(() => {
    const categoryFromURL = searchParams.get("category");
    const typeFromURL = searchParams.get("type");

    if (categoryFromURL) {
      setSelectedCategory(categoryFromURL.toLowerCase());
    }

    if (typeFromURL) {
      setSelectedSubType(typeFromURL.toLowerCase());
    }
  }, [searchParams]);

  // Unique category list
  const categories = [
    "all",
    ...new Set(allSupplements.map((s) => s.category.toLowerCase().trim())),
  ];

  // Subtypes for "proteins"
  const subTypes =
    selectedCategory === "proteins"
      ? [
          "all",
          ...new Set(
            allSupplements
              .filter(
                (s) =>
                  s.category.toLowerCase().trim() === "proteins" &&
                  s.type?.trim().length > 0
              )
              .map((s) => s.type.toLowerCase().trim())
          ),
        ]
      : [];

  // Filter supplements
  const filteredSupplements = allSupplements.filter((s) => {
    const cat = s.category.toLowerCase().trim();
    const type = s.type?.toLowerCase().trim() || "";

    const matchesCategory = selectedCategory === "all" || cat === selectedCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubType =
      selectedCategory !== "proteins" ||
      selectedSubType === "all" ||
      type === selectedSubType;

    return matchesCategory && matchesSearch && matchesSubType;
  });

  // Display format helpers
  const formatCategory = (cat) => {
    const lower = cat.toLowerCase();
    if (lower === "all") return "All";
    if (lower === "bcaa") return "BCAAs";
    if (lower === "preworkout") return "Pre-Workout";
    if (lower === "fatburner") return "Fat Burners";
    if (lower === "vitamins") return "Vitamins";
    if (lower === "creatine") return "Creatine";
    if (lower === "proteins") return "Proteins";
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  const formatSubType = (type) =>
    type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className="supplements-page">
      <h1>Supplements</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search supplement..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        <div className="category-filters">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedSubType("all");
              }}
              className={selectedCategory === cat ? "active" : ""}
            >
              {formatCategory(cat)}
            </button>
          ))}
        </div>

        {subTypes.length > 1 && (
          <div className="subcategory-filters">
            {subTypes.map((type, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSubType(type)}
                className={selectedSubType === type ? "active" : ""}
              >
                {formatSubType(type)}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="supplements-grid">
        {filteredSupplements.length > 0 ? (
          filteredSupplements.map((supp) => (
            <div className="supplement-card" key={supp.id}>
              <img src={supp.image} alt={supp.name} />
              <div className="supplement-content">
                <h3>{supp.name}</h3>
                <p className="category">{formatCategory(supp.category)}</p>
                {supp.type && selectedCategory === "proteins" && (
                  <p className="subcategory">{formatSubType(supp.type)}</p>
                )}
                <p className="description">{supp.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No supplements found.</p>
        )}
      </div>
    </div>
  );
};

export default Supplements;
