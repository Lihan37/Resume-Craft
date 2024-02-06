import React, { useLayoutEffect, useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import useDisplay from "../../hooks/useDisplay";

interface ITitle {
  maxWidth?: string;
}

const Title: React.FC<ITitle> = ({ maxWidth }) => {
  const [title, setTitle] = useState<string>("Untitled");
  const [inputWidth, setInputWidth] = useState<string>("0px");
  const inputRef = useRef<HTMLInputElement>(null);
  const [windowWidth] = useDisplay();

  useLayoutEffect(() => {
    const uppercaseLetters = title?.match(/[A-Z]/g)?.length || 0; // width 14px
    const lowercaseLetters = title?.match(/[a-z]/g)?.length || 0; // width 12px
    const spaceTitle =
      title?.split("").filter((item) => item === " ")?.length || 0; // width 5px
    const inputWidth =
      uppercaseLetters * 14 + lowercaseLetters * 10.2 + spaceTitle * 5 + "px" ||
      "0px";
    setInputWidth(inputWidth);
  }, [title]);

  useOutsideClick(inputRef, () => {
    if (title?.length === 0) {
      setTitle("Untitled");
    }
  });

  return (
    <div className=" text-base lg:text-xl font-semibold">
      <input
        style={{
          maxWidth: maxWidth
            ? maxWidth
            : title?.length > 8 && windowWidth > 769
            ? inputWidth
            : windowWidth > 769
            ? "80px"
            : "70px",
        }}
        ref={inputRef}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Untitled"
        className={`outline-none border-b-2 border-transparent focus:border-b-c-primary text-c-dark mt-1`}
        type="text"
        value={title}
      />
    </div>
  );
};

export default Title;
