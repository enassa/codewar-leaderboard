import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SideBarData as defaultMenuList } from "./side-bar-data/side-bar-data";
import { images } from "./../../../assets/images/images";
import { useAuthService } from "../../../store-and-services/auth-slice/auth-service";
import { useTheme } from "@emotion/react";

export default function TSideBar({ menuItems = [] }) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const { logOut, userData } = useAuthService();
  // ================ get active route from url ================
  const activeMenu = useLocation().pathname.split("/")[1];
  console.log(activeMenu);
  const menuList =
    Array.isArray(menuItems) && menuItems.length ? menuItems : defaultMenuList;
  const MenuItem = ({ menuItem }) => {
    return (
      <a
        href={menuItem?.url} // ================ just here for screen reader ================
        onClick={(e) => {
          e.preventDefault();
          if (menuItem.title === "Logout") {
            logOut();
            return;
          }
          navigate(menuItem?.url);
        }}
        className={`${
          activeMenu === menuItem.text
            ? "bg-[#F5F7F9]  text-blue-700"
            : "hover:bg-[#F5F7F9] text-[#374F63]"
        } flex px-[9px] w-full items-center mb-3 justify-center transition-all rounded-md cursor-pointer hover:text-blue-400 h-[43px] overflow-hidden`}
      >
        <div className="flex justify-center items-center mr-2">
          <span style={{ fontSize: 25 }}>{menuItem?.icon}</span>
        </div>
        {/* <div className="flex justify-start items-center">{menuItem?.title}</div> */}
      </a>
    );
  };

  const ejectMenuListForGroupOne = () => {
    return menuList
      .filter((menuItem) => menuItem?.group === 1)
      .map((menuItem, index) => {
        return <MenuItem key={index} menuItem={menuItem} />;
      });
  };

  const ejectMenuListForGroupTwo = () => {
    return menuList
      .filter((menuItem) => menuItem?.group === 2)
      .map((menuItem, index) => {
        return <MenuItem key={index} menuItem={menuItem} />;
      });
  };

  return (
    <div className="shadow-neumoNav w-[60px] min-w-[60px] h-full z-10  bg-xxxx flex flex-col ">
      <div className="w-full justify-center font-exrabold mt-[10px] mb-[20px]">
        {/* <BalanceCard balance={100} /> */}
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex flex-col">
          {ejectMenuListForGroupOne()}
        </div>
        <div className="w-full flex flex-col justify-end pb-[10px]">
          {ejectMenuListForGroupTwo()}
        </div>
      </div>
    </div>
  );
}
