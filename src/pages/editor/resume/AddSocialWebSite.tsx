import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { TypeOfSingleSocialWebSite } from "../../../types/resumeEditor";
import AddSingeSocialWebSite from "./AddSingeSocialWebSite";
import compareArrays from "../../../utils/compareArrays";
import { nanoid } from "@reduxjs/toolkit";

interface IAddSocialWebSite {
  getValue?: (data: TypeOfSingleSocialWebSite[]) => void;
  initialValue?: TypeOfSingleSocialWebSite[];
  getFocusedInputValue?: (data: string) => void;
  initialFocusedValue?: string;
}

const AddSocialWebSite: React.FC<IAddSocialWebSite> = ({
  getValue = () => {},
  getFocusedInputValue = () => {},
  initialValue,
  initialFocusedValue,
}) => {
  const [socialWebSite, setSocialWebSite] = useState<
    TypeOfSingleSocialWebSite[]
  >(initialValue || []);

  const handleSingleHistory = (data: TypeOfSingleSocialWebSite) => {
    // add new history
    const isAlreadyExist = socialWebSite?.find((item) => item._id === data._id);

    if (!isAlreadyExist) {
      const filterData = socialWebSite.filter((item) => item._id !== data._id);
      return setSocialWebSite([...filterData, data]);
    }

    // edit old history
    const updateHistory = socialWebSite?.map((item) => {
      if (item._id === data._id) {
        return {
          ...item,
          label: data.label,
          link: data.link,
        };
      }
      return item;
    });
    setSocialWebSite(updateHistory);
  };

  useEffect(() => {
    if (
      typeof getValue === "function" &&
      !compareArrays(socialWebSite, initialValue || [])
    ) {
      getValue(socialWebSite);
    }
  }, [socialWebSite]);

  const handleDelete = (id: string | number) => {
    const filteredData = socialWebSite.filter((item) => item._id !== id);
    setSocialWebSite(filteredData);
  };
  return (
    <div className=" space-y-3 bg-white overflow-hidden">
      {socialWebSite.map((item) => {
        const initialSingleData = socialWebSite?.find(
          (i) => i._id === item._id
        );

        return (
          <AddSingeSocialWebSite
            id={item._id}
            getValue={handleSingleHistory}
            key={item._id}
            initialValue={initialSingleData}
            getFocusedInputValue={getFocusedInputValue}
            initialFocusedValue={initialFocusedValue}
            getDelete={handleDelete}
          />
        );
      })}
      <button
        onClick={() =>
          setSocialWebSite((prev) => [
            ...prev,
            {
              _id: nanoid(),
              label: "",
              link: "",
            },
          ])
        }
        className=" px-3 font-semibold hover:text-blue-700 py-1 duration-300 transition-colors  text-c-primary flex justify-start items-center gap-4">
        <FaPlus />
        <span> Add one more Link</span>
      </button>
    </div>
  );
};

export default React.memo(AddSocialWebSite);
