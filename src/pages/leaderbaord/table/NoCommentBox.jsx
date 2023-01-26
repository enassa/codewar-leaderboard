import React from "react";
import { images } from "../../../assets/images/images";

export default function NoCommentBox({ message }) {
  return (
    <div className=" bg-transparent h-full w- flex  justify-center items-center flex-col">
      <img
        alt=""
        src={images.comment}
        className="h-[200px] mb-[20px] animate-rise"
      />
      <span className="text-3xl text-blue-400">
        {message ?? "No Comments for this user!"}
      </span>
    </div>
  );
}
