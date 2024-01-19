/**
 * The `useOutsideClick` hook is a custom React hook that listens for clicks outside of a specified
 * element and triggers a callback function when a click occurs outside.
 * @param ref - A React ref object that points to the element you want to check for outside clicks.
 * This ref object is created using the useRef hook.
 * @param callback - The `callback` parameter is a function that will be called when a click event
 * occurs outside of the element referenced by the `ref` parameter. It is used to perform some action
 * when an outside click is detected.
 */
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
