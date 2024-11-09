"use client";

import React, { Suspense } from "react";
import styles from "./filterPage.module.scss";
import MakesDropdown from "@/app/components/makesDropdown";
import YearsDropdown from "@/app/components/yearsDropdown";
import NextButton from "@/app/components/NextButton";

const FilterPage = () => {
  return (
    <div className={styles.filterPage}>
      <div className="container">
        <div className={styles.filterPage__wrapper}>
          <Suspense fallback={<p>Loading...</p>}>
            <MakesDropdown />
            <YearsDropdown />
            <NextButton />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
