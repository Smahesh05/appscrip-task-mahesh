import React from "react";
import styles from "./Sidebar.module.css";

const FilterCheckbox = ({ label }) => {
  return (
    <label className={styles.checkboxLabel}>
      <input type="checkbox" />
      <span>{label}</span>
    </label>
  );
};

export default FilterCheckbox;
