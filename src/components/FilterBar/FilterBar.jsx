import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
} from "react-icons/fa";
import "./FilterBar.css";

const FilterBar = ({ isFilterVisible, toggleFilterVisibility, onSortChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSelect = (option) => {
    const upperOption = option.toUpperCase();
    setSelectedOption(upperOption);
    setDropdownOpen(false);
    if (onSortChange) {
      onSortChange(upperOption);
    }
  };

  return (
    <div className="container">
      <div className="filter-bar">
        <div className="filter-left">
          <span className="item-count-sm">10 ITEMS</span>
          <span className="item-count">FILTER</span>
          <div className="hide-filter" onClick={toggleFilterVisibility}>
            {isFilterVisible ? (
              <>
                <FaChevronLeft className="arrow-icon" />
                <span className="hide-text">HIDE FILTER</span>
              </>
            ) : (
              <>
                <FaChevronRight className="arrow-icon" />
                <span className="hide-text">SHOW FILTER</span>
              </>
            )}
          </div>
        </div>

        <div className="filter-right" onClick={toggleDropdown}>
          <span className="recommended">{selectedOption}</span>
          {dropdownOpen ? (
            <FaChevronUp className="arrow-icon" />
          ) : (
            <FaChevronDown className="arrow-icon" />
          )}

          {dropdownOpen && (
            <ul className="dropdown-menu">
              {options.map((option, index) => (
                <li
                  key={index}
                  className={`dropdown-item ${selectedOption === option.toUpperCase() ? "active" : ""
                    }`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
