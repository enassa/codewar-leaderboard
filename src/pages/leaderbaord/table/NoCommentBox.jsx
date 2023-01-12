import React from "react";
import { images } from "../../../assets/images/images";

export default function NoCommentBox() {
  return (
    <div className="flex h-full w-full bg-red-400 justify-center items-center flex-col">
      <img alt="" src={images.comment} className="h-[200px] mb-[20px]" />
      <span className="text-3xl text-blue-400">No Comments for this user!</span>
    </div>
  );
}
