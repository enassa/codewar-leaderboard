import React from "react";
import NavBar from "./nav-bar/NavBar";
import SideBar from "./side-bar/SideBar";
import Modal from "./../modal/Modal";
import PopOverForm from "./../../pages/pop-overs/PopOverForm";
import AddUserForm from "./../add-user-form/AddUserForm";
import { BoardProvider } from "../../pages/leaderbaord/board-context";

export default function TPageWrapper({ children }) {
  return (
    <BoardProvider>
      <div className="flex w-full h-full max-w-full justify-center  bg-white px-[10px]">
        <Modal />
        <PopOverForm />
        <div className="w-[10px] bg-blue-800 fixed left-0 h-full top-0"></div>
        <AddUserForm />
        <div className="flex w-full h-full max-w-full overflow-hidden items-start justify-start flex-col">
          <div className="h-auto w-full flex">
            <NavBar />
          </div>
          <div className="w-full h-full max-h-full flex justify-start flex-row">
            <div className="w-auto h-full items-center">
              <SideBar />
            </div>
            <div className="h-[calc(100%-60px)]  overflow-y-auto  w-full flex flex-col justify-start max-w-full max-h-full  ">
              {children}
            </div>
          </div>
        </div>
      </div>
    </BoardProvider>
  );
}
