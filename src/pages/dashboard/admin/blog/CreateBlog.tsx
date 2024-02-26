/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { FC, useState, ChangeEvent } from "react";
import { useForm } from "react-hook-form"
const CreateBlog: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
    if (!selectedFile) {
      console.log("No file selected");
      return;
    }
    const imageFile={image:data.image[0]};
    const dataSubmit:any ={
      title: data.title,
      content: data.content,
      image: imageFile,
    }
    console.log(dataSubmit);
    axios.post("http://localhost:5173/addBlog", dataSubmit)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

    
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
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-6 items-center ">
        <div className="lg:flex md:flex justify-center lg:justify-center md:justify-center mb-2">
          <div className="items-center lg:flex md:flex font-semibold">
            Title:
          </div>
          <input
            type="text"
            {...register("title", { required: true })}
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
              {...register("image", { required: true })}
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
            Content:
          </label>
          <input
            type="text"
            {...register("content", { required: true })}
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
      </form>
      
    </div>
  );
};

export default CreateBlog;
