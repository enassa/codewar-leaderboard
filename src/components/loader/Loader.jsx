import React from "react";

export default function Loader({ className }) {
  return (
    <div
      className={`w-[30px] h-[30px] min-w-[30px] min-h-[30px] rounded-full bg border-l-4 border-t-4 border-white animate-spin`}
    ></div>
  );
}
