import React from "react";
import { IVehicleInfo } from "@/app/interfaces/IVehicleInfo.interface";
import styles from "./result.module.scss";
import Link from "next/link";

interface Props {
  vehicleInfo: IVehicleInfo[];
  year: string;
}

const ResultPageContent = ({ vehicleInfo, year }: Props) => {
  return (
    <div className={styles.result}>
      <Link href={'/'} className={styles.result__goBack}>Go Back</Link>
      <div className="container">
        <div className={styles.result__wrapper}>
          <h1>Vehicle Details</h1>
          <p>Model year: {year}</p>
          <div className={styles.result__models}>
            {vehicleInfo.length > 0 ? (
              vehicleInfo.map((vehicle: IVehicleInfo) => (
                <div className={styles.result__model} key={vehicle.Model_ID}>
                  <h2>{vehicle.Make_Name}</h2>
                  <p>{vehicle.Model_Name}</p>
                </div>
              ))
            ) : (
              <p>No vehicle models found for the selected make and year.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPageContent;
