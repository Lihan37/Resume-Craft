import React, { useLayoutEffect, useRef, useState } from "react";

const Title: React.FC = () => {
  const [title, setTitle] = useState<string>("Untitled");
  const [inputWidth, setInputWidth] = useState<string>("0px");
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const uppercaseLetters = title?.match(/[A-Z]/g)?.length || 0; // width 14px
    const lowercaseLetters = title?.match(/[a-z]/g)?.length || 0; // width 12px
    const spaceTitle =
      title?.split("").filter((item) => item === " ")?.length || 0; // width 5px
    const inputWidth =
      uppercaseLetters * 14 + lowercaseLetters * 10 + spaceTitle * 5 + "px" ||
      "0px";

    setInputWidth(inputWidth);
  }, [title]);

  return (
    <div className="text-xl font-semibold">
      <input
        style={{ width: inputWidth }}
        ref={inputRef}
        onChange={(e) => setTitle(e.target.value)}
        className={`outline-none border-b-2 border-transparent focus:border-b-c-primary text-c-dark mt-1`}
        type="text"
        value={title}
      />
    </div>
  );
};

export default Title;
