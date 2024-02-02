import { Link } from "react-router-dom";
// import Button, { ButtonSize } from "../../components/common/Button";
import { MdOutlineDownload } from "react-icons/md";
import { FaEquals } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { CheckIcon } from "@heroicons/react/24/outline";
import { FaRegFilePdf } from "react-icons/fa6";
import resume1 from "../../assets/resumes/resume1.webp";
import resume2 from "../../assets/resumes/resume2.webp";
import resume3 from "../../assets/resumes/resume3.webp";
import resume4 from "../../assets/resumes/resume4.webp";
import resume5 from "../../assets/resumes/resume5.webp";
import resume6 from "../../assets/resumes/resume6.webp";
import { FaRegCopy } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

const Resume: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const toggleDetails = () => {
  //   setShowDetails(!showDetails);
  // };
  return (
    <div className="ml-5 mt-3 lg:p-10 ">
      <div
        className="lg:flex
           md:flex md:justify-between
            lg:justify-between"
      >
        {/* resume */}
        <div className="">
          <h1 className=" text-xl lg:text-2xl  font-bold text-gray-700">
            Resumes
          </h1>
          <p className="text-sm lg:text-base text-gray-500">
            Create,Edit and Manage your resumes
          </p>
        </div>
        {/* button */}
        <div className="">
          <Link>
            <button
              type="button"
              className="bg-c-primary text-white font-mono text-base uppercase font-semibold px-5 py-2 rounded-t-lg
                   rounded-b-lg
                     hover:bg-c-primary-hover transition duration-300 ease-in-out"
            >
              Add Resume
            </button>
          </Link>
        </div>
      </div>
      {/* the templates */}
      <div className="my-4 ">
        <div
          className="grid 
            grid-cols-1 gap-5 
            md:grid-cols-2 lg:grid-cols-3"
        >
          {/* template 1 */}
           
           <div className="flex relative">
            {isSmallScreen ? (
              <div
                className={`md:w-2/3 lg:w-2/3 ${isSmallScreen ? "w-full" : ""}`}
              >
                <img src={resume1} alt="" />
                {showDetails && (
              <Transition.Root show={showDetails} as={Fragment}>
                <Dialog onClose={()=>setShowDetails(false)}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 h-full w-full z-10 overflow-y-auto">
                      <div className="flex min-h-screen items-center justify-center">
                        <div className="bg-white p-4 w-full max-w-md mx-auto  relative">
                { showDetails && <button 
                  className="btn absolute mt-4 
                  z-20
                  mr-3 p-2 px-2 py-1 rounded bg-c-primary text-white top-0 right-0"
                  onClick={()=>setShowDetails(!showDetails)}
                >
                  X
                </button>}
                <div className="flex flex-col w-2/4  text-sm">
              <h1 className="font-semibold my-2 ">United 1</h1>
              <p className="text-c-dark-light mb-2  text-xs ">
                Edited:2 Months ago
              </p>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegEdit className="" />
                <span className="btn">Open in Editor</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegCopy className="" />
                <span className="">Make a Copy</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <MdOutlineDownload className="" />
                <span className="">Download PDF</span>
              </button>
            </div>
                         
                        </div>
                      </div>
                    </div>
                  </Transition.Child>
                </Dialog>
              </Transition.Root>
            )}
                {!showDetails && <button 
                  className="btn absolute  
                  z-20 mt-8
                  mr-5 p-2 px-2 py-1 rounded bg-c-primary text-white top-0 right-0"
                  onClick={()=>setShowDetails(!showDetails)}
                >
                  
                  <FaEquals />
                </button>}
              </div>
            ) :
             (
              <div className="flex gap-3">
            <div
              className="lg:w-2/4 
            border-2 border-gray-200 rounded-md
           overflow-hidden
            md:w-2/3"
            >
              <img className="" src={resume1} alt="" />
            </div>
            <div className="flex flex-col w-2/4  text-sm">
              <h1 className="font-semibold my-2 ">United 1</h1>
              <p className="text-c-dark-light mb-2  text-xs ">
                Edited:2 Months ago
              </p>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegEdit className="" />
                <span className="btn">Open in Editor</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegCopy className="" />
                <span className="">Make a Copy</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <MdOutlineDownload className="" />
                <span className="">Download PDF</span>
              </button>
            </div>
          </div>
            )}

           
          </div>
          {/* template 2 */}
           <div className="flex relative">
            {isSmallScreen ? (
              <div
                className={`md:w-2/3 lg:w-2/3 ${isSmallScreen ? "w-full" : ""}`}
              >
                <img src={resume2} alt="" />
                {showDetails && (
              <Transition.Root show={showDetails} as={Fragment}>
                <Dialog onClose={()=>setShowDetails(false)}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 h-full w-full z-10 overflow-y-auto">
                      <div className="flex min-h-screen items-center justify-center">
                        <div className="bg-white p-4 w-full max-w-md mx-auto  relative">
                { showDetails && <button 
                  className="btn absolute mt-4 
                  z-20
                  mr-3 p-2 px-2 py-1 rounded bg-c-primary text-white top-0 right-0"
                  onClick={()=>setShowDetails(!showDetails)}
                >
                  X
                </button>}
                <div className="flex flex-col w-2/4  text-sm">
              <h1 className="font-semibold my-2 ">United 2</h1>
              <p className="text-c-dark-light mb-2  text-xs ">
                Edited:2 Months ago
              </p>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegEdit className="" />
                <span className="btn">Open in Editor</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegCopy className="" />
                <span className="">Make a Copy</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <MdOutlineDownload className="" />
                <span className="">Download PDF</span>
              </button>
            </div>
                         
                        </div>
                      </div>
                    </div>
                  </Transition.Child>
                </Dialog>
              </Transition.Root>
            )}
                {!showDetails && <button 
                  className="btn absolute  
                  z-20 mt-8
                  mr-5 p-2 px-2 py-1 rounded bg-c-primary text-white top-0 right-0"
                  onClick={()=>setShowDetails(!showDetails)}
                >
                  
                  <FaEquals />
                </button>}
              </div>
            ) :
             (
              <div className="flex gap-3">
            <div
              className="lg:w-2/4 
            border-2 border-gray-200 rounded-md
           overflow-hidden
            md:w-2/3"
            >
              <img className="" src={resume2} alt="" />
            </div>
            <div className="flex flex-col w-2/4  text-sm">
              <h1 className="font-semibold my-2 ">United 2</h1>
              <p className="text-c-dark-light mb-2  text-xs ">
                Edited:2 Months ago
              </p>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegEdit className="" />
                <span className="btn">Open in Editor</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegCopy className="" />
                <span className="">Make a Copy</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <MdOutlineDownload className="" />
                <span className="">Download PDF</span>
              </button>
            </div>
          </div>
            )}

           
          </div>
          {/* template 3 */}
           
           <div className="flex relative">
            {isSmallScreen ? (
              <div
                className={`md:w-2/3 lg:w-2/3 ${isSmallScreen ? "w-full" : ""}`}
              >
                <img src={resume3} alt="" />
                {showDetails && (
              <Transition.Root show={showDetails} as={Fragment}>
                <Dialog onClose={()=>setShowDetails(false)}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 h-full w-full z-10 overflow-y-auto">
                      <div className="flex min-h-screen items-center justify-center">
                        <div className="bg-white p-4 w-full max-w-md mx-auto  relative">
                { showDetails && <button 
                  className="btn absolute mt-4 
                  z-20
                  mr-3 p-2 px-2 py-1 rounded bg-c-primary text-white top-0 right-0"
                  onClick={()=>setShowDetails(!showDetails)}
                >
                  X
                </button>}
                <div className="flex flex-col w-2/4  text-sm">
              <h1 className="font-semibold my-2 ">United 3</h1>
              <p className="text-c-dark-light mb-2  text-xs ">
                Edited:2 Months ago
              </p>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegEdit className="" />
                <span className="btn">Open in Editor</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegCopy className="" />
                <span className="">Make a Copy</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <MdOutlineDownload className="" />
                <span className="">Download PDF</span>
              </button>
            </div>
                         
                        </div>
                      </div>
                    </div>
                  </Transition.Child>
                </Dialog>
              </Transition.Root>
            )}
                {!showDetails && <button 
                  className="btn absolute  
                  z-20 mt-8
                  mr-5 p-2 px-2 py-1 rounded bg-c-primary text-white top-0 right-0"
                  onClick={()=>setShowDetails(!showDetails)}
                >
                  
                  <FaEquals />
                </button>}
              </div>
            ) :
             (
              <div className="flex gap-3">
            <div
              className="lg:w-2/4 
            border-2 border-gray-200 rounded-md
           overflow-hidden
            md:w-2/3"
            >
              <img className="" src={resume3} alt="" />
            </div>
            <div className="flex flex-col w-2/4  text-sm">
              <h1 className="font-semibold my-2 ">United 3</h1>
              <p className="text-c-dark-light mb-2  text-xs ">
                Edited:2 Months ago
              </p>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegEdit className="" />
                <span className="btn">Open in Editor</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegCopy className="" />
                <span className="">Make a Copy</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <MdOutlineDownload className="" />
                <span className="">Download PDF</span>
              </button>
            </div>
          </div>
            )}

           
          </div>
          {/* template 4 */}
          
           <div className="flex relative">
            {isSmallScreen ? (
              <div
                className={`md:w-2/3 lg:w-2/3 ${isSmallScreen ? "w-full" : ""}`}
              >
                <img src={resume4} alt="" />
                {showDetails && (
              <Transition.Root show={showDetails} as={Fragment}>
                <Dialog onClose={()=>setShowDetails(false)}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 h-full w-full z-10 overflow-y-auto">
                      <div className="flex min-h-screen items-center justify-center">
                        <div className="bg-white p-4 w-full max-w-md mx-auto  relative">
                { showDetails && <button 
                  className="btn absolute mt-4 
                  z-20
                  mr-3 p-2 px-2 py-1 rounded bg-c-primary text-white top-0 right-0"
                  onClick={()=>setShowDetails(!showDetails)}
                >
                  X
                </button>}
                <div className="flex flex-col w-2/4  text-sm">
              <h1 className="font-semibold my-2 ">United 4</h1>
              <p className="text-c-dark-light mb-2  text-xs ">
                Edited:2 Months ago
              </p>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegEdit className="" />
                <span className="btn">Open in Editor</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegCopy className="" />
                <span className="">Make a Copy</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <MdOutlineDownload className="" />
                <span className="">Download PDF</span>
              </button>
            </div>
                         
                        </div>
                      </div>
                    </div>
                  </Transition.Child>
                </Dialog>
              </Transition.Root>
            )}
                {!showDetails && <button 
                  className="btn absolute  
                  z-20 mt-8
                  mr-5 p-2 px-2 py-1 rounded bg-c-primary text-white top-0 right-0"
                  onClick={()=>setShowDetails(!showDetails)}
                >
                  
                  <FaEquals />
                </button>}
              </div>
            ) :
             (
              <div className="flex gap-3">
            <div
              className="lg:w-2/4 
            border-2 border-gray-200 rounded-md
           overflow-hidden
            md:w-2/3"
            >
              <img className="" src={resume4} alt="" />
            </div>
            <div className="flex flex-col w-2/4  text-sm">
              <h1 className="font-semibold my-2 ">United 4</h1>
              <p className="text-c-dark-light mb-2  text-xs ">
                Edited:2 Months ago
              </p>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegEdit className="" />
                <span className="btn">Open in Editor</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegCopy className="" />
                <span className="">Make a Copy</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <MdOutlineDownload className="" />
                <span className="">Download PDF</span>
              </button>
            </div>
          </div>
            )}

           
          </div>
          {/* template 5 */}
        
           <div className="flex relative">
            {isSmallScreen ? (
              <div
                className={`md:w-2/3 lg:w-2/3 ${isSmallScreen ? "w-full" : ""}`}
              >
                <img src={resume5} alt="" />
                {showDetails && (
              <Transition.Root show={showDetails} as={Fragment}>
                <Dialog onClose={()=>setShowDetails(false)}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 h-full w-full z-10 overflow-y-auto">
                      <div className="flex min-h-screen items-center justify-center">
                        <div className="bg-white p-4 w-full max-w-md mx-auto  relative">
                { showDetails && <button 
                  className="btn absolute mt-4 
                  z-20
                  mr-3 p-2 px-2 py-1 rounded bg-c-primary text-white top-0 right-0"
                  onClick={()=>setShowDetails(!showDetails)}
                >
                  X
                </button>}
                <div className="flex flex-col w-2/4  text-sm">
              <h1 className="font-semibold my-2 ">United 5</h1>
              <p className="text-c-dark-light mb-2  text-xs ">
                Edited:2 Months ago
              </p>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegEdit className="" />
                <span className="btn">Open in Editor</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegCopy className="" />
                <span className="">Make a Copy</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <MdOutlineDownload className="" />
                <span className="">Download PDF</span>
              </button>
            </div>
                         
                        </div>
                      </div>
                    </div>
                  </Transition.Child>
                </Dialog>
              </Transition.Root>
            )}
                {!showDetails && <button 
                  className="btn absolute  
                  z-20 mt-8
                  mr-5 p-2 px-2 py-1 rounded bg-c-primary text-white top-0 right-0"
                  onClick={()=>setShowDetails(!showDetails)}
                >
                  
                  <FaEquals />
                </button>}
              </div>
            ) :
             (
              <div className="flex gap-3">
            <div
              className="lg:w-2/4 
            border-2 border-gray-200 rounded-md
           overflow-hidden
            md:w-2/3"
            >
              <img className="" src={resume5} alt="" />
            </div>
            <div className="flex flex-col w-2/4  text-sm">
              <h1 className="font-semibold my-2 ">United 6</h1>
              <p className="text-c-dark-light mb-2  text-xs ">
                Edited:2 Months ago
              </p>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegEdit className="" />
                <span className="btn">Open in Editor</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegCopy className="" />
                <span className="">Make a Copy</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <MdOutlineDownload className="" />
                <span className="">Download PDF</span>
              </button>
            </div>
          </div>
            )}

           
          </div>

          {/* template 6 */}
          <div className="flex relative">
            {isSmallScreen ? (
              <div
                className={`md:w-2/3 lg:w-2/3 ${isSmallScreen ? "w-full" : ""}`}
              >
                <img src={resume6} alt="" />
                {showDetails && (
              <Transition.Root show={showDetails} as={Fragment}>
                <Dialog onClose={()=>setShowDetails(false)}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 h-full w-full z-10 overflow-y-auto">
                      <div className="flex min-h-screen items-center justify-center">
                        <div className="bg-white p-4 w-full max-w-md mx-auto  relative">
                { showDetails && <button 
                  className="btn absolute mt-4 
                  z-20
                  mr-3 p-2 px-2 py-1 rounded bg-c-primary text-white top-0 right-0"
                  onClick={()=>setShowDetails(!showDetails)}
                >
                  X
                </button>}
                <div className="flex flex-col w-2/4  text-sm">
              <h1 className="font-semibold my-2 ">United 6</h1>
              <p className="text-c-dark-light mb-2  text-xs ">
                Edited:2 Months ago
              </p>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegEdit className="" />
                <span className="btn">Open in Editor</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegCopy className="" />
                <span className="">Make a Copy</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <MdOutlineDownload className="" />
                <span className="">Download PDF</span>
              </button>
            </div>
                         
                        </div>
                      </div>
                    </div>
                  </Transition.Child>
                </Dialog>
              </Transition.Root>
            )}
                {!showDetails && <button 
                  className="btn absolute  
                  z-20 mt-8
                  mr-5 p-2 px-2 py-1 rounded bg-c-primary text-white top-0 right-0"
                  onClick={()=>setShowDetails(!showDetails)}
                >
                  
                  <FaEquals />
                </button>}
              </div>
            ) :
             (
              <div className="flex gap-3">
            <div
              className="lg:w-2/4 
            border-2 border-gray-200 rounded-md
           overflow-hidden
            md:w-2/3"
            >
              <img className="" src={resume6} alt="" />
            </div>
            <div className="flex flex-col w-2/4  text-sm">
              <h1 className="font-semibold my-2 ">United 6</h1>
              <p className="text-c-dark-light mb-2  text-xs ">
                Edited:2 Months ago
              </p>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegEdit className="" />
                <span className="btn">Open in Editor</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <FaRegCopy className="" />
                <span className="">Make a Copy</span>
              </button>
              <button
                className="flex items-center gap-2 
               border-transparent hover:border-gray-200
              justify-items-start p-2 rounded-sm w-fit  border-2"
              >
                <MdOutlineDownload className="" />
                <span className="">Download PDF</span>
              </button>
            </div>
          </div>
            )}

           
          </div>
          {/* dotted one */}
          {/* template 7 */}
          <div className="flex relative">
            {isSmallScreen ? (
              <div
                className={`md:w-2/3 lg:w-2/3 ${isSmallScreen ? "w-full" : ""}`}
              >
                <FaRegFilePdf />
                {/* {showDetails && (
              <Transition.Root show={showDetails} as={Fragment}>
                <Dialog onClose={()=>setShowDetails(false)}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 h-full w-full z-10 overflow-y-auto">
                      <div className="flex min-h-screen items-center justify-center">
                        <div className="bg-white p-4 w-full max-w-md mx-auto  relative">
                { showDetails && <button 
                  className="btn absolute mt-4 
                  z-20
                  mr-3 p-2 px-2 py-1 rounded bg-c-primary text-white top-0 right-0"
                  onClick={()=>setShowDetails(!showDetails)}
                >
                  X
                </button>}
                <div className="flex  flex-col  ">
            <div className="grid place-items-center outline-dashed m-2 p-12 gap-6 outline-gray-400">
          <FaRegFilePdf  className="max-h-70" />
        <button className="text-gray-500">Add Resume</button>
          </div>
          </div>
                         
                        </div>
                      </div>
                    </div>
                  </Transition.Child>
                </Dialog>
              </Transition.Root>
            )}
                {!showDetails && <button 
                  className="btn absolute  
                  z-20 mt-8
                  mr-5 p-2 px-2 py-1 rounded bg-c-primary text-white top-0 right-0"
                  onClick={()=>setShowDetails(!showDetails)}
                >
                  
                  <FaEquals />
                </button>} */}
                <div className="flex  flex-col w-2/4 ">
        <div className="grid place-items-center outline-dashed m-2 p-12 gap-6 outline-gray-400">
      <FaRegFilePdf  className="max-h-70" />
      <button className="text-gray-500">Add Resume</button>
      </div>
      </div>
              </div>
            ) :
             (
              <div className="flex  flex-col w-2/4 ">
        <div className="grid place-items-center outline-dashed m-2 p-12 gap-6 outline-gray-400">
      <FaRegFilePdf  className="max-h-70" />
      <button className="text-gray-500">Add Resume</button>
      </div>
      </div>
            )}

           
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Resume;
