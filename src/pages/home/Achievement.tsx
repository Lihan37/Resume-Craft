import React, { useLayoutEffect, useRef, useState } from "react";

const Achievement: React.FC = () => {
  const [resumeCount, setResumeCount] = useState<number>(0);
  const [coverLetter, setCoverLetter] = useState<number>(0);
  const [websiteCount, setWebSiteCount] = useState<number>(0);
  const [registerCount, setRegisterCount] = useState<number>(0);
  const targetNodeRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && resumeCount < 9657) {
          setResumeCount((prevCount) => prevCount + 111);
        }
        if (entry.isIntersecting && coverLetter < 8658) {
          setCoverLetter((prevCount) => prevCount + 111);
        }
        if (entry.isIntersecting && websiteCount < 7770) {
          setWebSiteCount((prevCount) => prevCount + 111);
        }
        if (entry.isIntersecting && registerCount < 91020) {
          setRegisterCount((prevCount) => prevCount + 1110);
        }
        //   set value 0
        if (!entry.isIntersecting && resumeCount === 9657) {
          setResumeCount(0);
        }
        if (!entry.isIntersecting && coverLetter === 8658) {
          setCoverLetter(0);
        }
        if (!entry.isIntersecting && websiteCount === 7770) {
          setWebSiteCount(0);
        }
        if (!entry.isIntersecting && registerCount === 91020) {
          setRegisterCount(0);
        }
      });
    };

    // Create an instance of Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Start observing the target element
    if (targetNodeRef.current) {
      observer.observe(targetNodeRef.current);
    }

    // Cleanup when the component is unmounted
    return () => {
      if (targetNodeRef.current) {
        observer.unobserve(targetNodeRef.current);
      }
    };
  }, [resumeCount, registerCount, websiteCount, coverLetter]);

  return (
    <div
      ref={targetNodeRef}
      className=" py-12 xl:py-16 px-5 lg:px-10 xl:px-20  bg-gradient-to-r from-blue-50 to-[#eff6ffea] text-c-dark  rounded-2xl my-16">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-10 xl:gap-16">
        <div className=" relative h-48 xl:h-56 border-2 border-c-dark rounded-lg flex justify-center items-center">
          <span className=" text-[10rem] text-violet-200 font-mono font-bold">
            R
          </span>
          <div className=" absolute top-0 left-0 right-0 bottom-0 text-center py-4">
            <div className=" flex flex-col gap-3 justify-center items-center h-full w-full">
              <span className=" text-4xl xl:text-6xl font-bold">
                {resumeCount}
              </span>
              <span className=" text-2xl font-bold">+</span>
              <span className=" text-base xl:text-lg font-bold">
                Resume build
              </span>
            </div>
          </div>
        </div>
        <div className=" relative h-36 xl:h-40 border-2 border-c-dark rounded-lg flex justify-center items-center">
          <span className=" text-[10rem] text-violet-200 font-mono font-bold">
            C
          </span>
          <div className=" absolute top-0 left-0 right-0 bottom-0 text-center py-4">
            <div className=" flex flex-col gap-3 justify-center items-center h-full w-full">
              <div className=" flex justify-start gap-1 items-end">
                <span className=" text-4xl xl:text-6xl font-bold">
                  {coverLetter}
                </span>
                <span className=" text-2xl font-bold">+</span>
              </div>
              <span className=" text-base xl:text-lg font-bold">
                Cover letter build
              </span>
            </div>
          </div>
        </div>
        <div className=" relative h-36 xl:h-40 border-2 border-c-dark rounded-lg flex justify-center items-center">
          <span className=" text-[10rem] text-violet-200 font-mono font-bold">
            W
          </span>
          <div className=" absolute top-0 left-0 right-0 bottom-0 text-center py-4">
            <div className=" flex flex-col gap-3 justify-center items-center h-full w-full">
              <div className=" flex justify-start gap-1 items-end">
                <span className=" text-4xl xl:text-6xl font-bold">
                  {websiteCount}
                </span>
                <span className=" text-2xl font-bold">+</span>
              </div>
              <span className=" text-base xl:text-lg font-bold">
                Website build
              </span>
            </div>
          </div>
        </div>
        <div className=" relative h-48 xl:h-56  border-2 border-c-dark rounded-lg flex justify-center items-center">
          <span className=" text-[10rem] text-violet-200 font-mono font-bold">
            R
          </span>
          <div className=" absolute top-0 left-0 right-0 bottom-0 text-center py-4">
            <div className=" flex flex-col gap-3 justify-center items-center h-full w-full">
              <span className=" text-4xl xl:text-6xl font-bold">
                {registerCount}
              </span>
              <span className=" text-2xl font-bold">+</span>
              <span className=" text-base xl:text-lg font-bold">Register</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
