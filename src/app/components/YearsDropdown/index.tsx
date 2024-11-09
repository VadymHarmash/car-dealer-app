import React, { useContext, useState } from "react";
import styles from "@/app/pages/FilterPage/filterPage.module.scss";
import { MAGIC_NUMBERS } from "@/app/constants/magicNumbers";
import { vehicleContext } from "@/app/context/VehicleContext";

const YearsDropdown = () => {
  const { vehicleStore } = useContext(vehicleContext);
  const [selectedYear, setSelectedYear] = useState<string>("");
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - MAGIC_NUMBERS.baseYear + MAGIC_NUMBERS.oneYear },
    (_, i) => MAGIC_NUMBERS.baseYear + i,
  );

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    vehicleStore.setVehicleModelYear(Number(year));
  };

  return (
    <>
      <label className={styles.filterPage__label} htmlFor="modelYear">
        Select Model Year:
      </label>
      <select
        id="modelYear"
        className={styles.filterPage__dropdown}
        value={selectedYear}
        onChange={(e) => handleYearChange(e.target.value)}
      >
        <option className={styles.filterPage__dropdown__option} value="">
          Select a year
        </option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  );
};

export default YearsDropdown;
