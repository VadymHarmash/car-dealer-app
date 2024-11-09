"use client";

import React from "react";
import styles from "./filterPage.module.scss";
import MakesDropdown from "@/app/components/makesDropdown";
import YearsDropdown from "@/app/components/yearsDropdown";
import NextButton from "@/app/components/NextButton";

const FilterPage = () => {
  return (
    <div className={styles.filterPage}>
      <div className="container">
        <div className={styles.filterPage__wrapper}>
          <MakesDropdown />
          <YearsDropdown />
          <NextButton />
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
