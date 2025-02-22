import React, { useState } from "react";
import websitesData from "./data/websites.json"; // ✅ Correct import path

const WebsitesList = () => {
  const [category, setCategory] = useState("All");

  const categories = ["All", ...Object.keys(websitesData)];

  const filteredWebsites =
    category === "All"
      ? Object.values(websitesData).flat()
      : websitesData[category] || [];

  return (
    <div>
      <h2>Website Directory</h2>
      <label>Filter by Category:</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <ul>
        {filteredWebsites.map((site, index) => (
          <li key={index}>
            <a href={site.url} target="_blank" rel="noopener noreferrer">
              {site.name} ({category !== "All" ? category : "Multiple Categories"})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebsitesList;
