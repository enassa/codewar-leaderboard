import { Check } from "@mui/icons-material";
import React from "react";
const Success = () => {
  return (
    <div
      className={`w-full h-full  rounded-full bg-green-400 text-white border-white flex  justify-center items-center`}
    >
      <Check style={{ fontSize: 30 }} className="animate-rise mt-[5px]" />
    </div>
  );
};
export default Success;
