import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="relative flex h-screen w-full justify-center items-center">
      <div className="absolute animate-spin rounded-full h-40 w-40 border-t-4 border-b-4 border-blue-500"></div>
      <img
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        className="rounded-full h-28 w-28"
      />
    </div>
  );
};

export default Loader;
