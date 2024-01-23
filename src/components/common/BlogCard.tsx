const BlogCard = ({ blog }) => {
  const { image, title, author, authorImage, company, content } = blog;
  return (
    <div className="">
      <img src={image} className="rounded-tl-2xl rounded-tr-2xl" alt="" />
      <div className="border-2 border-gray-300 rounded-bl-2xl rounded-br-2xl p-4 lg:p-5">
        <div className="flex gap-4 font-semibold mb-3">
          <p className="bg-[#f8e9e9] px-4 py-2 rounded-xl">News</p>
          <p className="bg-[#c8e6f5] px-4 py-2 rounded-xl">Inspiration</p>
        </div>
        <h2 className="text-lg lg:text-2xl font-bold">{title}</h2>
        <p className="text-base lg:text-lg text-justify my-5">
          {content.slice(0, 115)}{" "}
          <span className="text-c-primary text-sm"> read more...</span>
        </p>
        <div className="flex gap-5">
          <img src={authorImage} className="w-[45px] rounded-full" alt="" />
          <div>
            <h3 className="text-base font-semibold">{author}</h3>
            <p className="text-sm">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
