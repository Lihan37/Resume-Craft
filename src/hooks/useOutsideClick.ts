import { useEffect, RefObject } from "react";

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
