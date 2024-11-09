import { AxiosResponse } from "axios";
import { axiosInstance } from "@/app/services/axiosInstance";
import { IVehiclesMakesResponse } from "@/app/interfaces/IVehiclesMakesResponse.interface";
import { IVehicleInfoResponse } from "@/app/interfaces/IVehicleInfoResponse.interface";

export default class VehicleMakesService {
  static async getMakes(): Promise<AxiosResponse<IVehiclesMakesResponse>> {
    return await axiosInstance.get("/GetMakesForVehicleType/car?format=json");
  }

  static async getVehicleInfo(
    makeId: string,
    year: string,
  ): Promise<AxiosResponse<IVehicleInfoResponse>> {
    return await axiosInstance.get(
      `/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    );
  }
}
