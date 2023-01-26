import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import React from "react";

export default function THorizontalBar({ children }) {
  const containerRef = React.createRef();

  let scrollValue = 0;

  const scrollLeft = () => {
    scrollValue = scrollValue + 100;
    containerRef.current.scroll({
      left: scrollValue,
      right: 0,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (scrollValue === 0) return;
    scrollValue = scrollValue + 100;
    containerRef.current.scroll({
      right: scrollValue,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-[200px] px-[15px]">
      <div
        ref={containerRef}
        className="flex h-[150px] scrollbar-hidden justify-start items-center overflow-auto w-full bg-transparent px-[10px]  rounded-[20px] relative"
      >
        {children}
      </div>
      <div
        onClick={() => scrollRight()}
        className="absolute hover:text-[#60A5FA] text-[#b1d4ff] cursor-pointer  top-[36%] left-[-13px] w-[40px] h-[40px] rounded-full  flex justify-center items-center"
      >
        <ArrowLeft style={{ fontSize: 50 }} className="pointer-events-none " />
      </div>
      <div
        onClick={() => scrollLeft()}
        className="absolute hover:text-[#60A5FA] text-[#b1d4ff] cursor-pointer   top-[36%] right-[-13px] w-[40px] h-[40px] rounded-full flex justify-center items-center"
      >
        <ArrowRight style={{ fontSize: 50 }} className="pointer-events-none " />
      </div>
    </div>
  );
}
