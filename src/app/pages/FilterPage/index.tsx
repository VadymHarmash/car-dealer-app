"use client";

import React from "react";
import styles from "./filterPage.module.scss";
import MakesDropdown from "@/app/components/makesDropdown";
import YearsDropdown from "@/app/components/yearsDropdown";

const FilterPage = () => {
  return (
    <div className={styles.filterPage}>
      <div className="container">
        <div className={styles.filterPage__wrapper}>
          <MakesDropdown />
          <YearsDropdown />
          <button className={styles.filterPage__button}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
