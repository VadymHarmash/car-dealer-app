import React, { Suspense } from "react";
import { AxiosResponse } from "axios";
import VehicleMakesService from "@/app/services/VehicleMakesService";
import { IVehicleMake } from "@/app/interfaces/IVehicleMake.interface";
import { IVehiclesMakesResponse } from "@/app/interfaces/IVehiclesMakesResponse.interface";
import ResultPageContent from "@/app/components/ResultPageContent";

interface Params {
  makeId: string;
  year: string;
}

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

const ResultPage = async ({ params }: { params: Params }) => {
  const { makeId, year } = params;

  const response: AxiosResponse = await VehicleMakesService.getVehicleInfo(
    makeId,
    year,
  );
  const vehicleInfo = response.data.Results;

  return (
    <Suspense
      fallback={<div className="loading">Loading vehicle details...</div>}
    >
      <ResultPageContent vehicleInfo={vehicleInfo} year={year} />
    </Suspense>
  );
};

export default ResultPage;
