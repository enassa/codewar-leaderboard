import React, { useState } from "react";
import { usersDummyData } from "../../constants/app-data";
import {
  Add,
  ChevronLeft,
  ChevronRight,
  Close,
  DeleteOutline,
  Edit,
  IntegrationInstructions,
  Refresh,
} from "@mui/icons-material";
import ComboInput from "./../../components/combo-input-box/ComboInput";
import { languages, getLanguageIcon } from "./../../constants/app-data";
import DynamicTable from "../../components/dynamic-table/DynamicTable";
import { Tooltip } from "@mui/material";

export default function Accounts() {
  //   const ejectTableRows = () => {
  //     return usersDummyData.map((data, index) => {
  //       return <AccountsTableRow key={index} rowData={data} position={index} />;
  //     });
  //   };
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
    <div className="w-full h-full flex px-[50px] flex-col pb-[20px] mt-[10px]">
      <div className="w-full h-[50px] flex justify-between items-center mb-[20px]">
        <span className="text-3xl  text-blue-900">Accounts</span>
        <div className="flex items-center ">
          <div className="w-[110px] p-[2px] bg-white shadow-md h-[40px] rounded-md flex justify-center items-center mr-[10px]">
            <button
              onClick={() => {
                changeBoardType("rank");
              }}
              className={` h-full w-full rounded-md  flex justify-center items-center cursor-pointer bg-blue-500  text-white px-1`}
            >
              <Add />
              <span>Add User</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table Control section */}

      {/* Table Entry Point */}
      <div className="w-full h-full bg-[#F8FAFF] overflow-auto px-3 rounded-md shadow-md">
        <div className="w-full h-full ">
          <DynamicTable
            tableData={[
              {
                name: "Assan Nathaniel",
                email: "assanenthaniel@gmail.com",
                contact: "0549546822",
                role: "User",
              },
              {
                name: "Assan Nathaniel",
                email: "assanenthaniel@gmail.com",
                contact: "0549546822",
                role: "User",
              },
            ]}
            rowStyles={{
              styles: { color: "" },
              classNames:
                "hover:bg-gray-50 mb-[20px] h-[60px] border-b border-b-gray-100",
            }}
            insertColumnsAfter={[
              {
                columnName: "role",
                columns: [
                  {
                    header: "Actions",
                    headerComponent: () => {
                      return <div> Actions </div>;
                    },
                    component: (cellData, rowData) => {
                      return (
                        <div className="flex w-full justify-center">
                          <Tooltip title={"Delete"}>
                            <div className="flex  mr-4  text-3xl font-extrabold text-blue-900 bg-blue-200 w-[44px] h-[44px] justify-center items-center rounded-full">
                              <Edit
                                className={`cursor-pointer  ${
                                  rowData.status === "pending"
                                    ? "text-gray-300"
                                    : "text-blue-900"
                                }`}
                              />
                            </div>
                          </Tooltip>
                          <Tooltip title={"Delete"}>
                            <div className="flex text-3xl font-extrabold text-red-900 bg-red-200 w-[44px] h-[44px] justify-center items-center rounded-full">
                              <DeleteOutline
                                className={`cursor-pointer  ${
                                  rowData.status === "pending"
                                    ? "text-gray-300"
                                    : "text-red-900"
                                }`}
                              />
                            </div>
                          </Tooltip>
                        </div>
                      );
                    },
                  },
                ],
              },
            ]}
            insertColumnsBefore={[
              {
                columnName: "name",
                columns: [
                  {
                    header: "Actions",
                    headerComponent: () => {
                      return <div className="text-gray-500"> Profile </div>;
                    },
                    component: (cellData, rowData) => {
                      return (
                        <div className="flex ">
                          <div className="flex text-3xl font-extrabold text-blue-900 bg-blue-200 w-[44px] h-[44px] justify-center items-center rounded-full">
                            {cellData?.charAt(0)}
                          </div>
                        </div>
                      );
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
