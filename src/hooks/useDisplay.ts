/**
 * The `useDisplay` hook returns the current window width and scroll position as state variables, and
 * updates them whenever the window is resized or scrolled.
 * @returns The useDisplay custom hook returns an array containing the current window width and scroll
 * position.
 */
import { useLayoutEffect, useState } from "react";

const useDisplay = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollY, setScroll] = useState(window.scrollY);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [windowWidth, scrollY];
};

export default useDisplay;
