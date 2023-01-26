import React, { useEffect, useState } from "react";
import {
  dummyDataHonor,
  dummyDataLanguage,
  dummyDataOverall,
  headers,
  usersDummyData,
} from "../../constants/app-data";
import TableRow from "./table/TableRow";
import ComboInput from "./../../components/combo-input-box/ComboInput";
import { languages, getLanguageIcon } from "./../../constants/app-data";
import { useBoardService } from "./../../store-and-services/boarddata-slice/board-service";
import SlimLoader from "./../../components/slim-loader/SlimLoader";

import { useUserService } from "./../../components/add-user-form/add-user-context";
import { mockMode } from "./../../config/config";
import {
  Add,
  ChevronLeft,
  ChevronRight,
  IntegrationInstructions,
} from "@mui/icons-material";
import NoCommentBox from "./table/NoCommentBox";

export default function LeaderBoard() {
  const [boardType, setBoardType] = useState("honor");
  const {
    getUsersByHonor,
    getUsersByOverall,
    getUsersByLanguage,
    boardList,
    loadingBoard,
    toggleUserFormState,
    changeBoardTypeMock,
  } = useBoardService();

  useEffect(() => {
    mockMode ? changeBoardTypeMock(dummyDataHonor) : getUsersByHonor();
  }, []);
  const tableData = boardList;
  const [rowsToDisplay, setRowsToDisplay] = useState(20);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const calcNumOfPages = () => Math.ceil(tableData.length);
  const numberOfPages = () => (calcNumOfPages() ? calcNumOfPages() : 1);
  const displayFrom = currentPageNumber * rowsToDisplay - rowsToDisplay;
  const displayTo = () =>
    currentPageNumber * rowsToDisplay > numberOfPages()
      ? numberOfPages()
      : currentPageNumber * rowsToDisplay;
  const paginatedData = () => {
    return tableData.slice(displayFrom, displayTo());
  };
  const increasePageNumber = () => {
    if (currentPageNumber <= numberOfPages() / 30) {
      setCurrentPageNumber(currentPageNumber + 1);
    }
  };
  const decreasePageNumber = () => {
    if (currentPageNumber !== 1) {
      setCurrentPageNumber(currentPageNumber - 1);
    }
  };
  const ejectTableRows = () => {
    return paginatedData().map((data, index) => {
      return <TableRow key={index} rowData={data} position={index} />;
    });
  };
  const ejectTableHeades = () => {
    return headers.map((data, index) => {
      if (boardType === "language" && data === "Language") return;
      const headerStyle =
        data === "Language" || data === "Actions" ? "justify-center" : "";
      const getHeader = (header) => {
        if (boardType === "rank") {
          return header === "Honor" ? "Scores" : data;
        }
        return data;
      };
      return (
        <td className={headerStyle} key={index}>
          <div className={`w-full h-full flex text-gray-500 ${headerStyle}`}>
            {getHeader(data)}
          </div>
        </td>
      );
    });
  };

  const changeBoardType = (board, language) => {
    setBoardType(board);
    switch (board) {
      case "honor":
        setRowsToDisplay(30);
        setCurrentPageNumber(1);
        return mockMode
          ? changeBoardTypeMock(dummyDataHonor)
          : getUsersByHonor();
      case "rank":
        setRowsToDisplay(30);
        setCurrentPageNumber(1);
        return mockMode
          ? changeBoardTypeMock(dummyDataOverall)
          : getUsersByOverall();
      case "language":
        setRowsToDisplay(30);
        setCurrentPageNumber(1);
        return mockMode
          ? changeBoardTypeMock(dummyDataLanguage)
          : getUsersByLanguage(language);
      default:
        break;
    }
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
          <div className="w-[200px] bg-blue-400 h-[35px] rounded-md p-1 flex justify-center items-center mr-[10px] mt-[10px]">
            <div
              onClick={() => {
                changeBoardType("honor");
              }}
              className={`${
                boardType === "rank" || boardType === "language"
                  ? "text-white bg-transparent"
                  : "bg-blue-50 text-blue-600"
              } h-full w-[50%]   rounded-sm flex justify-center items-center cursor-pointer `}
            >
              Honor
            </div>
            <div
              onClick={() => {
                changeBoardType("rank");
              }}
              className={`${
                boardType === "rank" || boardType === "language"
                  ? "bg-blue-50 text-blue-600"
                  : "text-white bg-transparent"
              } h-full w-[50%] rounded-sm  flex justify-center items-center cursor-pointer `}
            >
              Rank
            </div>
          </div>
          <div className="h-[60px] flex z-[6]">
            {boardType === "rank" || boardType === "language" ? (
              <div className="h-full flex items-center animate-rise mb-[30px]">
                <ComboInput
                  placeholder="Select Language"
                  label=""
                  name="language"
                  data={getLanguagesObject()}
                  getSelected={(value) => {
                    if (value === "Overall") {
                      changeBoardType("rank");
                    } else {
                      changeBoardType("language", value);
                    }
                  }}
                  displayProperty={"name"}
                  value={"Overall"}
                  noBorder
                  className="bg-[#F5F7F9] border-0 max-w-full w-full "
                />
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-[110px] p-[2px] bg-xxxx shadow-md h-[40px] rounded-md flex justify-center items-center mr-[20px]">
            <button
              onClick={() => {
                toggleUserFormState(true);
              }}
              className={` h-full w-full rounded-md  flex justify-center items-center cursor-pointer bg-blue-500  text-white px-1`}
            >
              <Add />
              <span>Add User</span>
            </button>
          </div>
          <span className="mr-2">
            {displayFrom} - {displayTo()} of {tableData?.length}
          </span>
          <span className="ml-2">
            <ChevronLeft
              className="cursor-pointer"
              onClick={() => {
                decreasePageNumber();
              }}
            />
            <ChevronRight
              className="cursor-pointer"
              onClick={() => {
                increasePageNumber();
              }}
            />
          </span>
        </div>
      </div>

      {/* Table Entry Point */}
      <div className="w-full h-full bg-[#F8FAFF] overflow-auto overflow-x-hidden px-3 relative">
        {tableData.length === 0 && (
          <div className="w-full h-full  flex justify-center items-center absolute top-0 left-0">
            <NoCommentBox message="No users" />
          </div>
        )}
        <div className="w-full h-full ">
          <table className="w-full ">
            <thead className="sticky shadow-sm top-0 bg-[#F8FAFF] z-[3] h-[60px] mb-[20px] border-b-2 border-b-gray-200 overflow-x-hidden">
              <div className="w-full h-[5px] absolute  ">
                {loadingBoard && <SlimLoader />}
              </div>
              <div></div>
              <tr>{ejectTableHeades()}</tr>
            </thead>
            <tbody>{ejectTableRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
// bg-[#F8FAFF]
