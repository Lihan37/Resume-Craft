import React, { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import useOutsideClick from "../../../hooks/useOutsideClick";

const search = [
  "Student",
  "Manager",
  "Service",
  "Worker",
  "Federal",
  "Engineer",
  "Technician",
  "Cashier",
  "Paralegal",
];

const Search: React.FC = () => {
  const [suggestionIsOpen, setSuggestionIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const inputRef = useRef(null);

  const handleSuggestion = (data: string) => {
    setSearchQuery(data);
    setSuggestionIsOpen(false);
  };

  useOutsideClick(inputRef, () => {
    setSuggestionIsOpen(false);
  });

  return (
    <div className=" w-full my-10">
      <div
        ref={inputRef}
        className=" flex justify-start items-center border-c-primary border-2 rounded-md font-semibold px-3 relative">
        <label htmlFor="search">
          <FiSearch className=" text-2xl text-c-primary" />
        </label>
        <input
          value={searchQuery}
          onClick={() => setSuggestionIsOpen(true)}
          onChange={(e) => setSearchQuery(e.target.value)}
          className=" w-full p-3 text-lg text-c-dark  outline-none"
          type="text"
          name="search"
          id="search"
          placeholder="Type your job title"
        />
        {suggestionIsOpen && (
          <div className=" absolute left-0 right-0 max-h-72 z-50 top-14 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-y-scroll py-5">
            {search.map((item) => (
              <div
                onClick={() => handleSuggestion(item)}
                key={item}
                className="w-full px-10">
                <span className="  w-full block p-3 text-lg font-semibold cursor-pointer border-b-[1px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
