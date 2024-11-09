import React, { Suspense } from "react";
import { AxiosResponse } from "axios";
import VehicleMakesService from "@/app/services/VehicleMakesService";
import styles from "./result.module.scss";
import { IVehicleMake } from "@/app/interfaces/IVehicleMake.interface";
import { IVehiclesMakesResponse } from "@/app/interfaces/IVehiclesMakesResponse.interface";
import { IVehicleInfo } from "@/app/interfaces/IVehicleInfo.interface";

export async function generateStaticParams() {
  const response: AxiosResponse<IVehiclesMakesResponse> =
    await VehicleMakesService.getMakes();
  const vehicleMakes: IVehicleMake[] = response.data.Results;

  const staticParams = [];

  for (const make of vehicleMakes) {
    const modelYears = [
      2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
    ];
    for (const year of modelYears) {
      staticParams.push({
        makeId: make.MakeId.toString(),
        year: year.toString(),
      });
    }
  }

  return staticParams;
}

const ResultPageContent = async ({ params }: any) => {
  const { makeId, year } = params;

  const response: AxiosResponse = await VehicleMakesService.getVehicleInfo(
    makeId,
    year,
  );
  const vehicleInfo = response.data.Results;

  return (
    <div className={styles.result}>
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

const ResultPage = ({ params }: any) => {
  return (
    <Suspense
      fallback={<div className="loading">Loading vehicle details...</div>}
    >
      <ResultPageContent params={params} />
    </Suspense>
  );
};

export default ResultPage;
