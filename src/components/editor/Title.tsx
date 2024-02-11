import React, {
  useLayoutEffect,
  useRef,
  useState,
  InputHTMLAttributes,
  useEffect,
} from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import useDisplay from "../../hooks/useDisplay";
import { MdModeEditOutline } from "react-icons/md";

interface ITitle extends InputHTMLAttributes<HTMLInputElement> {
  maxWidth?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  getValue?: (data: string) => void;
  initialValue?: string;
}
const Title: React.FC<ITitle> = ({
  maxWidth,
  onClick,
  getValue = () => {},
  initialValue,
  ...argument
}) => {
  const [title, setTitle] = useState<string>(initialValue || "Untitled");
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

  useEffect(() => {
    if (initialValue !== title) {
      setTitle(initialValue || "Untitled");
    }
  }, [initialValue]);

  useOutsideClick(inputRef, () => {
    if (title?.length === 0) {
      setTitle(initialValue || "Untitled");
    }
  });

  const handleEditClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (typeof getValue === "function" && initialValue !== title) {
      console.count("Title getValue");
      getValue(title);
    }
  }, [title]);

  console.count("Title");
  return (
    <div
      onClick={onClick}
      className=" flex justify-start items-center text-base lg:text-xl font-semibold">
      <input
        {...argument}
        style={{
          maxWidth: maxWidth
            ? maxWidth
            : title?.length > 4 && windowWidth > 769
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
      <MdModeEditOutline
        onClick={handleEditClick}
        className=" text-xl hover:text-c-primary duration-300 transition-colors cursor-pointer"
      />
    </div>
  );
};

export default React.memo(Title);
