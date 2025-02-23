import React, { useState, useEffect } from "react";  
import Sidebar from "./components/Sidebar";
import WebsiteList from "./components/WebsiteList";
import websitesData from "./data/websites.json";
import { FaMoon, FaSun } from "react-icons/fa";

const App = () => {
  const [category, setCategory] = useState("IntraSphere"); // ✅ Updated Category Name
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [filteredWebsites, setFilteredWebsites] = useState([]);

  useEffect(() => {
    if (websitesData[category]) {
      setFilteredWebsites(websitesData[category]);
    } else {
      setFilteredWebsites([]);
    }
  }, [category]);

  // Toggle Dark Mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Search Filter
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    if (websitesData[category]) {
      const filtered = websitesData[category].filter((site) =>
        site.name.toLowerCase().includes(value)
      );
      setFilteredWebsites(filtered);
    }
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      {/* Sidebar */}
      <Sidebar setCategory={setCategory} />

      {/* Main Content */}
      <div className="content container">
        <div className="header d-flex justify-content-between align-items-center">
          <h1 className="category-title">{category} Websites</h1>

          {/* Dark Mode Toggle */}
          <button className="toggle-btn" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder={`Search in ${category}...`}
            value={search}
            onChange={handleSearch}
          />
        </div>

        {/* Display Websites */}
        <div className="website-grid">
          {filteredWebsites.map((site, index) => (
            <a
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="website-card"
            >
              <img src={site.logo} alt={site.name} className="website-logo" />
              <span className="website-name">{site.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App; 