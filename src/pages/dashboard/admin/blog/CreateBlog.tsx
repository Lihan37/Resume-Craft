import React, { FC, useState, ChangeEvent } from "react";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { set } from "firebase/database";
import { ImInsertTemplate } from "react-icons/im";

const CreateBlog: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };
  interface Tag {
    id: number;
    tagName: string;
  }

  const tagData: Tag[] = [
    { id: 1, tagName: "Resume" },
    { id: 2, tagName: "Cover Letter" },
    { id: 3, tagName: "Education" },
    { id: 4, tagName: "Business" },
  ];

  const [selected, setSelected] = useState(tagData[0]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

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

        <div
          className="lg:flex md:flex justify-center 
        items-center
        lg:justify-center md:justify-center mb-2">
          <label className="items-center lg:mr-2 md:mr-2 lg:flex md:flex font-semibold">
            Tags:
          </label>
          <div>
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                      <span className="block truncate">{selected.tagName}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0">
                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {tagData.map((item) => (
                          <Listbox.Option
                            key={item.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-indigo-600"
                                  : "text-gray-900",
                                "relative cursor-default select-none py-2 pl-3 pr-9"
                              )
                            }
                            value={item}>
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "block truncate"
                                  )}>
                                  {item.tagName}
                                </span>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}>
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                        {/* <Listbox.Option
                    key={5}
                    className={({ active }) =>
                        classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                    }
                    value={{id: 5, tagName: "Add New Tag"}}
                >
                    {({ selected, active }) => (
                        <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                            Add New Tag
                        </span>
                        <input
                            className="border border-gray-300 rounded-md p-1"
                            placeholder='Add New Tag'
                         type="text" />
                        {selected ? (
                            <span
                            className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                            >
                            <ImInsertTemplate className="h-5 w-5" aria-hidden="true" />
                            </span>
                        ) : null}
                        </>
                    )}
                </Listbox.Option> */}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
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
