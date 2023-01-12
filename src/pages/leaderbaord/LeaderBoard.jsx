import React, { useState } from "react";
import { usersDummyData } from "../../constants/app-data";
import TableRow from "./table/TableRow";
import {
  ChevronLeft,
  ChevronRight,
  IntegrationInstructions,
} from "@mui/icons-material";
import ComboInput from "./../../components/combo-input-box/ComboInput";
import { languages, getLanguageIcon } from "./../../constants/app-data";

export default function LeaderBoard() {
  const ejectTableRows = () => {
    return usersDummyData.map((data, index) => {
      return <TableRow key={index} rowData={data} position={index} />;
    });
  };
  const ejectTableHeades = () => {
    const headers = [
      "Profile",
      "User Name",
      "Rank",
      "Clan",
      "Language",
      "Honor",
      "Position",
      "Actions",
    ];
    return headers.map((data, index) => {
      const headerStyle =
        data === "Language" || data === "Actions" ? "justify-center" : "";
      return (
        <td className={headerStyle} key={index}>
          <div className={`w-full h-full flex text-gray-500 ${headerStyle}`}>
            {data}
          </div>
        </td>
      );
    });
  };
  const [boardType, setBoardType] = useState("honor");
  const changeBoardType = (board) => {
    setBoardType(board);
  };

  const getLanguagesObject = () => {
    const langObj = [
      {
        name: "Overall",
        icon: <IntegrationInstructions className="text-gray-500" />,
      },
    ];

    languages.map((language, index) => {
      const languageIcon = getLanguageIcon(language);
      langObj.push({
        name: language,
        icon: languageIcon,
      });
    });
    return langObj;
  };
  return (
    <div className="w-full h-full flex px-[50px] flex-col pb-[20px]">
      <div className="w-full h-[50px] flex justify-start items-center mb-[20px]">
        <span className="text-3xl  text-blue-900">Leader Board</span>
      </div>

      {/* Table Control section */}
      <div className="w-full h-[60px] flex items-center justify-between ">
        <div className="flex items-center ">
          <div className="w-[200px] bg-blue-400 h-[30px] rounded-md p-1 flex justify-center items-center mr-[10px]">
            <div
              onClick={() => {
                changeBoardType("honor");
              }}
              className={`${
                boardType === "honor"
                  ? "bg-blue-50 text-blue-600"
                  : "text-white bg-transparent"
              } h-full w-[50%]   rounded-md flex justify-center items-center cursor-pointer `}
            >
              Honor
            </div>
            <div
              onClick={() => {
                changeBoardType("rank");
              }}
              className={`${
                boardType === "rank"
                  ? "bg-blue-50 text-blue-600"
                  : "text-white bg-transparent"
              } h-full w-[50%] rounded-md  flex justify-center items-center cursor-pointer `}
            >
              Rank
            </div>
          </div>
          <div className="h-[60px] flex z-[3]">
            {boardType === "rank" && (
              <div className="h-full flex items-center animate-rise mt-[10px]">
                <ComboInput
                  placeholder="Select Language"
                  label=""
                  name="language"
                  data={getLanguagesObject()}
                  displayProperty={"name"}
                  value={"Overall"}
                  noBorder
                  className="bg-[#F5F7F9] border-0 max-w-full w-full "
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <span className="mr-2">1 - 50 of 373</span>
          <span className="ml-2">
            <ChevronLeft className="cursor-pointer" />
            <ChevronRight className="cursor-pointer" />
          </span>
        </div>
      </div>

      {/* Table Entry Point */}
      <div className="w-full h-full bg-[#F8FAFF] overflow-auto px-3">
        <div className="w-full h-full">
          <table className="w-full ">
            <thead className="sticky shadow-sm top-0 bg-[#F8FAFF] z-[2] h-[60px] mb-[20px] border-b-2 border-b-gray-200">
              <tr>{ejectTableHeades()}</tr>
            </thead>
            <tbody>{ejectTableRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
