"use client";

import React, { useEffect } from "react";
import { toJS } from "mobx";

const ResultPage = ({ params }: any) => {
  useEffect(() => {
    console.log(toJS(params));
  }, []);

  return (
    <div>
      <h1>Vehicle Details</h1>
    </div>
  );
};

export default ResultPage;
