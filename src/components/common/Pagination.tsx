import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Pagination: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <nav
        className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
        aria-label="Pagination"
      >
        <a
          className="flex w-10 h-10 mr-1 justify-center items-center rounded-full border bg-white text-black hover:border-gray-300"
          href="#"
          title="Previous Page"
        >
          <button className="bg-c-primary text-white rounded-full p-3">
            <IoArrowBack />
          </button>
        </a>
        <a
          className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border  bg-c-primary text-white pointer-events-none"
          href="#"
          aria-current="page"
          title="Page 3"
        >
          1
        </a>
        <a
          className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-c-dark-light bg-white text-black hover:border-gray-300"
          href="#"
          title="Page 2"
        >
          2
        </a>
        <a
          className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-c-dark-light bg-white text-black hover:border-gray-300"
          href="#"
          title="Page 2"
        >
          3
        </a>
        <a
          className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-c-dark-light bg-white text-black hover:border-gray-300"
          href="#"
          title="Page 4"
        >
          4
        </a>
        <a
          className="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-c-dark-light bg-white text-black hover:border-gray-300"
          href="#"
          title="Page 5"
        >
          5
        </a>
        <a
          className="flex w-10 h-10 ml-1 justify-center items-center rounded-full border bg-white text-black hover:border-gray-300"
          href="#"
          title="Next Page"
        >
          <button className="bg-c-primary text-white rounded-full p-3">
            <IoArrowForward />
          </button>
        </a>
      </nav>
    </div>
  );
};

export default Pagination;
