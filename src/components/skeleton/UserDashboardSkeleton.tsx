import React from "react";

const UserDashboardSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      <SingleItem />
      <SingleItem />
      <div className=" md:hidden xl:block">
        <SingleItem />
      </div>
    </div>
  );
};

export default UserDashboardSkeleton;

const SingleItem = () => {
  return (
    <div className=" flex justify-start items-start gap-5">
      <div className="h-56 lg:h-72 xl:h-56 2xl:h-72 w-full  border-[1px] rounded-md overflow-hidden">
        <div className="flex items-center justify-center w-full h-full bg-blue-50 rounded  dark:bg-blue-100">
          <svg
            className="w-10 h-10 text-blue-100 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      <div className=" flex flex-col gap-5 justify-start items-start w-full">
        <div className="h-5 bg-blue-50 dark:bg-blue-100 rounded-sm blue w-48 "></div>
        <div className="h-5 bg-blue-50 dark:bg-blue-100 rounded-sm blue w-32 "></div>
        <div className="h-5 bg-blue-50 dark:bg-blue-100 rounded-sm blue w-32 "></div>
      </div>
    </div>
  );
};
