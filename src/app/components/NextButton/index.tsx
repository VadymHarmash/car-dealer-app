import React, { useContext, useEffect, useState } from "react";
import styles from "@/app/pages/FilterPage/filterPage.module.scss";
import { vehicleContext } from "@/app/context/VehicleContext";
import { observer } from "mobx-react-lite";
import Link from "next/link";

const NextButton = observer(() => {
  const { vehicleStore } = useContext(vehicleContext);
  const [isDisabled, setIsDisabled] = useState(true);

  const enableButton = () => {
    vehicleStore.vehicleMakeName && vehicleStore.vehicleModelYear
      ? setIsDisabled(false)
      : setIsDisabled(true);
  };

  useEffect(() => {
    enableButton();
  }, [vehicleStore.vehicleMakeName, vehicleStore.vehicleModelYear]);

  const makeId = vehicleStore.vehicleMakeId;
  const year = vehicleStore.vehicleModelYear;

  return (
    <Link
      href={`/result/${makeId}/${year}`}
      className={`${styles.filterPage__button} ${
        isDisabled ? styles.filterPage__button__disabled : ""
      }`}
      aria-disabled={isDisabled}
      style={isDisabled ? { pointerEvents: "none" } : {}}
    >
      Next
    </Link>
  );
});

export default NextButton;
