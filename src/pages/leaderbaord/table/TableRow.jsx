import {
  ArrowBackIos,
  ArrowForwardIos,
  Close,
  Comment,
  Delete,
  Details,
  Info,
  List,
  Send,
  ZoomInMap,
} from "@mui/icons-material";
import React, { useState } from "react";
import { images } from "../../../assets/images/images";
import THorizontalBar from "../../../components/horizontal-bar/HorizontalBar";
import { svgs } from "./../../../assets/svg/svg";
import {
  commentsdummyData,
  getLanguageIcon,
  languages,
} from "../../../constants/app-data";
import CommentBox from "./CommentBox";
import NoCommentBox from "./NoCommentBox";

export default function TableRow({ rowData, position }) {
  const [accordionToShow, setAccordionToShow] = useState("");
  const [showAllComment, setShowAllComment] = useState(false);

  const getAllLanguages = () => {
    return languages.map((lang, index) => {
      return (
        <div
          key={index}
          className="flex mr-2 font-extrabold text-blue-900 bg-blue-100 w-[34px] h-[34px] justify-center items-center rounded-full relative"
        >
          {<img alt="" src={getLanguageIcon(lang)} className="h-[20px]" />}
        </div>
      );
    });
  };
  const inputRef = React.createRef();
  const changeAccordionToShow = (accordion) => {
    if (accordion === "comment") {
      //   inputRef.current.focus();
    }
    setAccordionToShow(accordion);
  };
  const dataFields = Object.keys(rowData);

  const getMessages = () => {
    return commentsdummyData.length ? (
      commentsdummyData.map((data, index) => {
        return <CommentBox data={data} />;
      })
    ) : (
      <NoCommentBox />
    );
  };
  return (
    <>
      <tr className="w-full h-[60px] mb-1">
        <td>
          <div className="flex text-3xl font-extrabold text-blue-900 bg-blue-200 w-[44px] h-[44px] justify-center items-center rounded-full">
            {rowData?.name?.charAt(0)}
          </div>
        </td>
        <td>
          <div className="flex">{rowData?.name}</div>
        </td>
        <td>
          <div className="flex w-[60px] fill-red-500  relative items-center text-yellow-900  justify-center">
            {svgs.Hexagon}
            <span className="absolute font-bold top-[15px] left-[14px]">
              5kyu
            </span>
          </div>
        </td>
        <td>
          <div className="flex">{rowData?.clan}</div>
        </td>
        <td className="flex justify-center">
          <div className="flex  overflow-x-hidden overflow-y-hidden max-w-[300px] h-[70px] items-center">
            <THorizontalBar>{getAllLanguages()}</THorizontalBar>
          </div>
        </td>
        <td>
          <div className="flex">{rowData.honor}</div>
        </td>
        <td>
          <div className="flex font-extrabold text-blue-900 bg-blue-100 w-[44px] min-w-[44px] h-[44px] justify-center items-center rounded-full relative">
            {position + 1}
            <span className="absolute top-[-8px] right-[-8px] rotate-45">
              {svgs.Crown}
            </span>
          </div>
        </td>
        <td className="justify-center flex">
          <div className="flex text-white bg-blue-400 justify-between items-center w-[150px] h-[50px] rounded-md p-3 ml-[20px]">
            {accordionToShow === "comment" ? (
              <Close
                onClick={() => changeAccordionToShow("")}
                className="cursor-pointer text-red-100"
              />
            ) : (
              <Comment
                onClick={() => changeAccordionToShow("comment")}
                className="cursor-pointer"
              />
            )}
            {accordionToShow === "details" ? (
              <Close
                onClick={() => changeAccordionToShow("")}
                className="cursor-pointer text-red-100"
              />
            ) : (
              <Info
                className="text-green-200 cursor-pointer"
                onClick={() => changeAccordionToShow("details")}
              />
            )}

            <Delete
              onClick={() => console.log("delete")}
              className="text-red-200 cursor-pointer"
            />
          </div>
        </td>
      </tr>
      {accordionToShow === "comment" ? (
        <tr className="w-full  ">
          <td colSpan={"100%"} className="w-full relative">
            <div
              className={`${
                showAllComment
                  ? "fixed bg-[rgb(0,0,0,0.5)] py-[30px]"
                  : "flex bg-transparent animate-increaseHeight "
              } w-full top-0 left-0 h-full  z-[5] flex justify-center items-start `}
            >
              <div
                className={` ${
                  showAllComment
                    ? "w-[80%] h-[600px ] min-h-[650px] animate-enLarge"
                    : "w-full h-[190px] min-h-[190px] animate-rise"
                } flex-col flex justify-start   py-[20px] bg-white z-[3] `}
              >
                {showAllComment ? (
                  <>
                    <div className="w-full h-[50px] flex justify-end px-4">
                      <ZoomInMap
                        className="cursor-pointer"
                        onClick={() => setShowAllComment(false)}
                      />
                    </div>
                    <div
                      style={{ backgroundImage: `url(${images.bgImage})` }}
                      className="w-full h-full bg-gray-100 flex justify-start items-center flex-col-reverse mb-[10px] overflow-y-auto py-[20px]"
                    >
                      {getMessages()}
                    </div>
                  </>
                ) : null}

                <div className="w-full flex justify-center items-center mb-[20px] ">
                  {/* <div className="w-[80%]  border-2 border-gray-400 h-[60px] rounded-full mr-5"></div> */}
                  {/* <div className="flex  text-blue-900 border border-gray-500 w-[60px] min-w-[60px] h-[60px] justify-center items-center rounded-full relative">
                  <Send className="text-gray-500 ml-1" />
                </div> */}
                  <div className="w-[80%] bg-blue-200 h-[60px] rounded-full mr-5 overflow-hidden py-[10px] pb-[13px] ">
                    <input
                      ref={inputRef}
                      className="w-full text-3xl text-blue-900 h-full p-3 py-3 px-4 border-0 bg-transparent outline-none"
                    />
                  </div>
                  <div className="flex  text-white bg-blue-600 w-[60px] min-w-[60px] h-[60px] justify-center items-center rounded-full relative cursor-pointer">
                    <Send className="text-white ml-1" />
                  </div>
                </div>
                {!showAllComment ? (
                  <div className="w-full flex justify-center h-full items-center ">
                    <span className="flex items-center h-full">
                      <Comment
                        style={{ fontSize: 15 }}
                        className="mr-1 text-blue-600"
                      />
                      <span className="text-blue-600">200 comments</span>
                    </span>
                    <span className="text-gray-600 whitespace-nowrap flex items-center cursor-pointer">
                      <div
                        onClick={() => setShowAllComment(true)}
                        className=" bg-blue-500 text-white rounded-full py-[4px] ml-[10px] px-4 text-sm"
                      >
                        View all
                      </div>
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          </td>
        </tr>
      ) : accordionToShow === "details" ? (
        <tr className="w-full  ">
          <td colSpan={"100%"} className="w-full animate-increaseHeight">
            <div className="w-full h-[70px] bg-white flex justify-end"></div>
          </td>
        </tr>
      ) : null}
    </>
  );
}
