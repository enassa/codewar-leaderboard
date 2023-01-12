import { Add, Close } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useBoardManager } from "../../pages/leaderbaord/board-context";
import { useLocation } from "react-router-dom";
import { ROUTES } from "./../../constants/route-links";

export default function AddUserForm() {
  const { showAddUserForm, hideAddUserForm, viewAddUserForm } =
    useBoardManager();
  const inputRef = React.createRef();
  const location = useLocation();
  return (
    <div
      className={`w-full h-full transition-[background-color] duration-500 ${
        viewAddUserForm ? "bg-[rgb(0,0,0,0.5)]" : "bg-transparent "
      } ] pointer-events-none fixed left-0 top-0 z-[10] `}
    >
      <div
        className={`transition-[width] duration-500 pointer-events-auto z-[2] ${
          viewAddUserForm ? "w-[30%]" : "w-[10px] "
        }  bg-blue-800 fixed right-0 h-full top-0 flex items-center  ${
          viewAddUserForm ? "border-l-white border-l-4" : ""
        } `}
      >
        {location.pathname === ROUTES.leaderboard.url && (
          <>
            <div
              className={`${
                viewAddUserForm ? "w-full" : "w-[70px] min-w-[70px]"
              } h-[70px] px-4 rounded-full  relative left-[-40px] flex justify-start items-center overflow-hidden  ${
                viewAddUserForm
                  ? "border-l-white border-l-4 bg-white text-red-400 "
                  : "text-white bg-blue-800"
              }`}
            >
              <span className="h-full flex items-center mr-2 cursor-pointer">
                {viewAddUserForm ? (
                  <Close
                    onClick={() => {
                      hideAddUserForm();
                    }}
                  />
                ) : (
                  <Add
                    onClick={() => {
                      inputRef.current.focus();
                      showAddUserForm();
                    }}
                  />
                )}
              </span>
              <input
                ref={inputRef}
                className="h-full w-full flex justify-start bg-white outline-none items-center text-3xl text-black pb-1"
              />
            </div>
            <div
              onClick={() => {}}
              className="w-[70px] h-[70px] min-w-[70px] bg-white rounded-full flex justify-center items-center mr-3 cursor-pointer"
            >
              <Add />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
// 08255A
