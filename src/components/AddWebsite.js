import React, { useState } from "react";

const AddWebsite = ({ addWebsite }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !url || !category) return;

    addWebsite({ name, url, category });
    setName("");
    setUrl("");
    setCategory("");
  };

  return (
    <div className="add-website-container">
      <h2>Add a New Website</h2>
      <form onSubmit={handleSubmit} className="add-website-form">
        <input
          type="text"
          placeholder="Website Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="New or Existing Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <button type="submit" className="add-button">➕ Add Website</button>
      </form>
    </div>
  );
};

export default AddWebsite;
