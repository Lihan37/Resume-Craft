import { FC, useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useOutsideClick from "../../hooks/useOutsideClick";

const options = [
  { value: 0.5, label: "25%" },
  { value: 0.6, label: "50%" },
  { value: 0.8, label: "75%" },
  { value: 1, label: "100%" },
];

interface IZoomIn {
  initialValue?: number;
  getValue?: (data: number) => void;
}

const ZoomIn: FC<IZoomIn> = ({ initialValue, getValue = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const [state, setState] = useState<number>(initialValue || 0.7);

  useEffect(() => {
    if (typeof getValue === "function") {
      getValue(state);
    }
  }, [state]);
  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  const label = options.find((item) => item.value === state);

  return (
    <div
      ref={ref}
      onClick={() => setIsOpen((prev) => !prev)}
      className="cursor-pointer font-semibold relative px-3 lg:px-4 py-1 lg:py-2 text-base lg:text-lg bg-neutral-100 rounded-md flex justify-start gap-1 items-center">
      <span>{label?.label}</span> <IoIosArrowDown />
      {isOpen && (
        <div className="rounded-md shadow-md bg-white text-center absolute left-0 right-0 top-10 z-50">
          {options.map((item) => {
            const isActive = item.value === state;
            return (
              <h1
                onClick={() => setState(item.value)}
                key={item.value}
                className={`text-base p-2 cursor-pointer duration-300 transition-colors ${
                  isActive ? "bg-neutral-100" : "hover:bg-neutral-100"
                }`}>
                {item.label}
              </h1>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ZoomIn;
