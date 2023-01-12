import { Replay } from "@mui/icons-material";
import React from "react";

export default function Retry({ handleRetry }) {
  return (
    <div
      onClick={() => handleRetry()}
      className={`w-full h-full cursor-pointer  rounded-full bg-red-400 text-white flex  justify-center items-center`}
    >
      <Replay style={{ fontSize: 30 }} className="animate-rise mt-[5px]" />
    </div>
  );
}
