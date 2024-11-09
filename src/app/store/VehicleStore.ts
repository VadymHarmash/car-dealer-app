import { makeAutoObservable, runInAction } from "mobx";
import { IVehicleMake } from "@/app/interfaces/IVehicleMake.interface";
import VehicleMakesService from "@/app/services/VehicleMakesService";

export class VehicleStore {
  vehicleMakes: IVehicleMake[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchVehicleMakes() {
    try {
      const response = await VehicleMakesService.getMakes();
      runInAction(() => {
        this.vehicleMakes = response.data.Results;
      });
    } catch (error) {
      console.error("Failed to fetch vehicle makes:", error);
    }
  }
}
