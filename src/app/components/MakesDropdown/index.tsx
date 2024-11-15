import React, { useContext, useEffect, useState } from "react";
import styles from "@/app/pages/FilterPage/filterPage.module.scss";
import { IVehicleMake } from "@/app/interfaces/IVehicleMake.interface";
import { vehicleContext } from "@/app/context/VehicleContext";
import { toJS } from "mobx";

const MakesDropdown = () => {
  const [vehicleMakesData, setVehicleMakesData] = useState<IVehicleMake[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>("");
  const { vehicleStore } = useContext(vehicleContext);

  useEffect(() => {
    const fetchData = async () => {
      await vehicleStore.fetchVehicleMakes();
      setVehicleMakesData(toJS(vehicleStore.vehicleMakes));
    };

    fetchData();
  }, [vehicleStore]);

  const handleMakeChange = (make: string) => {
    setSelectedMake(make);
    vehicleStore.setVehicleMakeName(make);
  };

  return (
    <>
      <label className={styles.filterPage__label} htmlFor="vehicleMakes">
        Select Vehicle Make:
      </label>
      <select
        className={styles.filterPage__dropdown}
        id="vehicleMakes"
        value={selectedMake}
        onChange={(e) => handleMakeChange(e.target.value)}
      >
        <option className={styles.filterPage__dropdown__option} value="">
          Select a make
        </option>
        {vehicleMakesData.map((vehicleMake: IVehicleMake) => (
          <option key={vehicleMake.MakeId} value={vehicleMake.MakeName}>
            {vehicleMake.MakeName}
          </option>
        ))}
      </select>
    </>
  );
};

export default MakesDropdown;
