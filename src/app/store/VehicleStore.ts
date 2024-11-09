import { makeAutoObservable, runInAction } from "mobx";
import { IVehicleMake } from "@/app/interfaces/IVehicleMake.interface";
import VehicleMakesService from "@/app/services/VehicleMakesService";

export class VehicleStore {
  vehicleMakes: IVehicleMake[] = [];
  vehicleMakeId: number | null = null;
  vehicleMakeName: string = "";
  vehicleModelYear: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setVehicleMakeName(vehicleMakeName: string): void {
    this.vehicleMakeName = vehicleMakeName;
    this.updateMakeIdByName();
  }

  setVehicleModelYear(vehicleModelYear: number): void {
    this.vehicleModelYear = vehicleModelYear;
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

  updateMakeIdByName() {
    const selectedMake = this.vehicleMakes.find(
      (make) => make.MakeName === this.vehicleMakeName
    );
    this.vehicleMakeId = selectedMake ? selectedMake.MakeId : null;
  }
}
