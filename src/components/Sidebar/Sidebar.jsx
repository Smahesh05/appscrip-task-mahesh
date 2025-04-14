import React from "react";
import { filterOptions } from "../../data/filterOptions";
import FilterSection from "./FilterSection";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {filterOptions.map((section, index) => (
        <FilterSection key={index} section={section} />
      ))}
    </aside>
  );
};

export default Sidebar;
