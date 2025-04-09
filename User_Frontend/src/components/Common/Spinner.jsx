import React from "react";
import { BeatLoader } from "react-spinners"

const Spinner = () => {
  return(
    <div className=" bg-white flex fixed w-screen h-screen top-0 left-0 items-center justify-center z-50">
        <BeatLoader />
    </div>
  );
};

export default Spinner;
