import { Check, Info } from "@mui/icons-material";
import React from "react";

export default function Failed() {
  return (
    <div
      className={`w-full h-full  rounded-full bg-red-400 text-white flex  justify-center items-center`}
    >
      <Info style={{ fontSize: 30 }} className="animate-rise mt-[5px]" />
    </div>
  );
}
