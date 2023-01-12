import React from "react";
import CreatePortfolio from "../../components/pop-up-form/pop-up-form";

export default function PopOverForm() {
  return (
    <div className="w-full z-[55] h-full items-center justify-center fixed top-0 right-0 pointer-events-none">
      {false && <CreatePortfolio />}
    </div>
  );
}
