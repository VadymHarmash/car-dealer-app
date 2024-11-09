export interface IVehicleInfoResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IResults;
}

export interface IResults {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}
