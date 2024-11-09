import { createContext } from "react";
import { VehicleStore } from "@/app/store/VehicleStore";

interface IVehicleContext {
  vehicleStore: VehicleStore;
}

export const vehicleStore = new VehicleStore();

export const vehicleContext = createContext<IVehicleContext>({
  vehicleStore,
});
