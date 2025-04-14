import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FilterCheckbox from "./FilterCheckbox";
import styles from "./Sidebar.module.css";

const FilterSection = ({ section }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className={styles.filterSection}>
      <h3 onClick={toggleExpand}>
        {section.title}
        <span className={styles.icon}>
          {expanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </h3>

      {expanded && section.type === "checkbox" && (
        <div className={styles.options}>
          {section.options.map((opt, i) => (
            <FilterCheckbox key={i} label={opt} />
          ))}
        </div>
      )}

      {expanded && section.type === "dropdown" && (
        <div className={styles.options}>
          <p className={styles.dropdownLabel}>All</p>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
