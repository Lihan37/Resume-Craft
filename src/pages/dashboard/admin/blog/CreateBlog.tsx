import { FC, useState, ChangeEvent } from "react";
import useTitleSet from "../../../../hooks/useTitleSet";

const CreateBlog: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  useTitleSet("Create Blog");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  return (
    <div
      style={{ height: window.innerHeight - 32 }}
      className="w-full  p-10
      max-h-screen overflow-scroll
       rounded-xl  h-screen bg-white">
      <h2 className="md:text-xl font-semibold italic mt-3 lg:text-2xl text-center">
        This is the blog post section
        <br />
        where you can post a blog
      </h2>
      <div className="mt-6 items-center ">
        <div className="lg:flex md:flex justify-center lg:justify-center md:justify-center mb-2">
          <div className="items-center lg:flex md:flex font-semibold">
            Title:
          </div>
          <input
            type="text"
            className="lg:w-3/4 
            border-xl w-full
            hover:border-indigo-500 hover:bg-gray-100
            md:w-1/2 lg:ml-2 md:ml-2 border border-gray-400 rounded-md p-3"
          />
        </div>

        <div className="lg:flex md:flex justify-center lg:justify-center md:justify-center mb-2">
          <div className="items-center lg:flex md:flex font-semibold">
            Image:
          </div>
          <div
            className="relative cursor-pointer lg:w-3/4 md:w-1/2 text-center border
            border-xl
            hover:border-indigo-500 hover:bg-gray-100
             border-gray-400 rounded-md 
            p:10
            md:p-20 lg:p-30">
            <span className="block">Click to upload</span>
            <input
              type="file"
              id="fileInput"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
            />
            <div className="mt-2 text-gray-600">
              {selectedFile && <span>Selected File: {selectedFile.name}</span>}
            </div>
          </div>
        </div>

        <div
          className="lg:flex md:flex justify-center 
        items-center
        lg:justify-center md:justify-center mb-2">
          <label className="items-center lg:flex md:flex font-semibold">
            Editor:
          </label>
          <input
            type="text"
            className="lg:w-3/4
            hover:border-indigo-500 hover:bg-gray-100
            border-xl w-full
             md:w-1/2 lg:ml-2 md:ml-2 border border-gray-400 rounded-md p-20"
          />
        </div>

        <div className="lg:flex md:flex justify-center lg:justify-center md:justify-center  mb-2">
          <button
            className="bg-blue-500 hover:bg-blue-200 text-white font-bold py-2 px-4 
            hover:border-indigo-500 
            w-1/2 
            rounded-md"
            type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
