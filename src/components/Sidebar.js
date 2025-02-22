import React from "react";
import { FaHome, FaLaptopCode, FaPalette, FaBook, FaCode } from "react-icons/fa";

const Sidebar = ({ setCategory }) => {
  return (
    <div className="sidebar">
      <h3 className="text-center">Yoga App</h3>
      <ul>
        <li onClick={() => setCategory("Design")}>
          <FaPalette className="icon" /> Design
        </li>
        <li onClick={() => setCategory("AI Bots")}>
          <FaLaptopCode className="icon" /> AI Bots
        </li>
        <li onClick={() => setCategory("Development Tools")}>
          <FaLaptopCode className="icon" /> Development Tools
        </li>
        <li onClick={() => setCategory("Online Learning")}>
          <FaBook className="icon" /> Online Learning
        </li>
        <li onClick={() => setCategory("Coding Platforms")}>
          <FaCode className="icon" /> Coding Platforms
        </li>
        <li onClick={() => setCategory("Productivity")}>
          <FaHome className="icon" /> Productivity
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
