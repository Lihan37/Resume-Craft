import { FC, useState, useRef } from "react";
import useTitleSet from "../../../../hooks/useTitleSet";
import { CiImageOn } from "react-icons/ci";
import InputTextEditor from "../../../../components/common/InputTextEditor";
import Button from "../../../../components/common/Button";
import { BiLoaderAlt } from "react-icons/bi";
import { TagsInput } from "react-tag-input-component";

const CreateBlog: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>(["News"]);

  useTitleSet("Create Blog");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = () => {
    if (inputRef.current) {
      inputRef.current?.click();
    }
  };
  return (
    <div
      style={{ height: window.innerHeight }}
      className="p-4 overflow-scroll pb-20">
      <h1 className="text-4xl text-c-dark-light font-bold ">Create Blog</h1>
      <div className="  space-y-4 mt-10">
        <input
          type="text"
          className="w-full text-3xl px-4 py-3 rounded-md outline-none focus:border-c-primary  border-[1.8px] placeholder:font-semibold placeholder:text-gray-400 placeholder:text-3xl text-c-dark"
          placeholder=" Title.."
        />
        <div
          onClick={handleImageSelect}
          className=" bg-gray-100 rounded-md overflow-hidden w-full h-80 cursor-pointer text-7xl flex justify-center items-center">
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="image"
              className=""
            />
          ) : (
            <CiImageOn />
          )}
          <input
            type="file"
            accept="image/jpeg, image/jpg, image/png"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                setSelectedFile(files[0]);
              }
            }}
            className=" hidden"
            ref={inputRef}
          />
        </div>
        <InputTextEditor height="400px" />
        <TagsInput
          value={tags}
          onChange={setTags}
          name="tags"
          placeHolder="blogs tags"
        />
        <div className=" w-full flex justify-center items-center">
          <Button disabled={loading} icon={false}>
            <div className=" flex justify-start items-center gap-1">
              Create
              {loading && <BiLoaderAlt className="animate-spin text-xl" />}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
