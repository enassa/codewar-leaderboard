import React from "react";
import Loader from "../../../components/loader/Loader";
import Success from "../../../components/success/Success";
import Retry from "./../../../components/retry/Retry";

export default function CommentBox({ data, status = "failed" }) {
  const myEmail = "assanics@gmail.com";

  return data?.email === myEmail ? (
    <div className=" w-[80%]  mb-[30px] min-h-[100px] items-center flex flex-row-reverse ">
      <div className="flex mr-2 font-extrabold shadow-md  text-blue-900 bg-blue-300 w-[44px] h-[44px]  min-w-[44px] min-h-[44px] justify-center items-center rounded-full relative">
        <span className="h-full w-full flex justify-center items-center">
          {false ? (
            <Loader />
          ) : (
            <>
              {status === "sent" ? (
                <span>{data.email.charAt(0)}</span>
              ) : status === "success" ? (
                <Success />
              ) : status === "failed" ? (
                <Retry handleRetry={() => {}} />
              ) : null}
            </>
          )}
        </span>
      </div>
      <div
        style={{ borderRadius: "20px 10px 10px 0px" }}
        className="flex mr-2  shadow-md p-3  bg-white w-full h-auto flex-col items-center rounded-full relative"
      >
        <div className="w-full h-[20px] flex justify-start  text-blue-700 px-3">
          me:nathaniel@gmail.com
        </div>

        <div className="w-full h-full p-3 text-gray-600">
          {data.commentText}
        </div>
        <div className="w-full h-[20px] flex justify-end text-xs text-gray-400">
          {data.createdAt}
        </div>
      </div>
    </div>
  ) : (
    <div className=" w-[80%]  mb-[30px] min-h-[100px] items-center flex ">
      <div className="flex mr-2 font-extrabold shadow-md  text-blue-900 bg-blue-300 w-[44px] h-[44px] justify-center items-center rounded-full relative">
        {data.email.charAt(0)}
      </div>
      <div
        style={{ borderRadius: "20px 10px 10px 0px" }}
        className="flex mr-2  shadow-md p-3  bg-white w-full h-auto flex-col items-center rounded-full relative"
      >
        <div className="w-full h-[20px] flex justify-start  text-red-400 px-3">
          {data.email}
        </div>

        <div className="w-full h-full p-3 text-gray-600">
          {data.commentText}
        </div>
        <div className="w-full h-[20px] flex justify-end text-xs text-gray-400">
          {data.createdAt}
        </div>
      </div>
    </div>
  );
}
