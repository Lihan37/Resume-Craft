import { useEffect, RefObject } from "react";

const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
  excludeRefs: RefObject<HTMLElement>[] = []
) => {
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      // Check if the clicked element is not within any of the excluded references
      excludeRefs.every((excludeRef) => {
        return !excludeRef.current?.contains(event.target as Node);
      })
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [ref, callback, excludeRefs]);
};

export default useOutsideClick;
