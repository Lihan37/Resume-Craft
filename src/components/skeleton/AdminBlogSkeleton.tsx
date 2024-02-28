import React from "react";

const AdminBlogSkeleton: React.FC = () => {
  return (
    <>
      <Single />
      <Single />
      <Single />
      <Single />
      <Single />
      <Single />
    </>
  );
};

export default AdminBlogSkeleton;

const Single = () => {
  return (
    <tr>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="animate-pulse flex items-center gap-3">
          <div className="flex flex-col gap-1">
            <div className="h-4 bg-gray-200 w-40 rounded"></div>
            <div className="h-4 bg-gray-200 w-32 rounded"></div>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="animate-pulse flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gray-200"></div>
          <div className="flex flex-col gap-1">
            <div className="h-4 bg-gray-200 w-24 rounded"></div>
            <div className="h-4 bg-gray-200 w-32 rounded"></div>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="animate-pulse flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gray-200"></div>
          <div className="h-9 w-9 rounded-md bg-gray-200"></div>
          <div className="h-9 w-9 rounded-md bg-gray-200"></div>
        </div>
      </td>
    </tr>
  );
};
