import { AxiosResponse } from "axios";
import { axiosInstance } from "@/app/services/axiosInstance";
import { IVehiclesMakesResponse } from "@/app/interfaces/IVehiclesMakesResponse.interface";

export default class VehicleMakesService {
  static async getMakes(): Promise<AxiosResponse<IVehiclesMakesResponse>> {
    return await axiosInstance.get("/GetMakesForVehicleType/car?format=json");
  }

  static async getVehicleInfo(
    makeId: string,
    year: string,
  ): Promise<AxiosResponse<any>> {
    return await axiosInstance.get(
      `/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    );
  }
}
