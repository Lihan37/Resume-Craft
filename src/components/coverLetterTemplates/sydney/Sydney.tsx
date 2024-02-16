import React, { forwardRef } from "react";
import { ICoverLetter } from "../../../services/coverletterEditor/coverletterEditorSlice";

export interface ISydney {
  coverLetter: ICoverLetter;
}

const Sydney: React.ForwardRefRenderFunction<HTMLDivElement, ISydney> = (
  { coverLetter },
  ref
) => {
  return (
    <div
      ref={ref}
      style={{
        transform: `scale(${coverLetter.zoom})`,
        height: coverLetter.size.height,
        width: coverLetter.size.width,
        transformOrigin:
          parseFloat(coverLetter.size.height.slice(0, -2)) > 1190.14
            ? "bottom"
            : "",
        transition: "transform 0.5s",
      }}>
      <div className=" w-full  p-[48px] h-full bg-white text-neutral-800 ">
        <div className=" flex gap-3 justify-between items-start font-bold ">
          <div className=" max-w-[28.2rem] text-7xl">
            {coverLetter.fullName}
          </div>
          <div className="w-fit">
            <h1 className=" font-bold  text-neutral-700 text-3xl ">
              {coverLetter.JobTitle}
            </h1>
            <h1 className=" text-xl font-semibold">{coverLetter.email}</h1>
            <h1 className=" text-xl font-semibold">
              {coverLetter.phoneNumber}
            </h1>
            <h1 className=" text-xl font-semibold">{coverLetter.address}</h1>
          </div>
        </div>
        <h1 className=" mx-auto mt-10 font-semibold text-2xl text-center w-fit px-5 py-1 bg-neutral-800 text-white">
          TO : {coverLetter.managerName}, {coverLetter.companyName}
        </h1>
        <div className=" mt-10 border-t-4 pt-10 border-violet-950 text-xl">
          {coverLetter.details}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Sydney);
