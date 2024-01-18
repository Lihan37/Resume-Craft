

interface ICard {
    id: number,
    title: string,
    description: string,
    image: string
  }
const Card  = ({id,title,description,image}:ICard) => {
    return (
        <div key={id} className="flex 
        bg-[#C8D7EF] p-5 rounded-lg shadow-lg
        flex-col">
        <dt className="text-base font-semibold leading-7 text-gray-900">
    <div className="flex  gap-2  items-center">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-300 opacity-70">
      <img src={image} className="h-6 w-6 text-white" aria-hidden="true" />
    </div>
    <div>
      {title}
    </div>
  </div>
</dt>
        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
          <p className="flex-auto">{description}</p>
         
        </dd>
      </div>
    );
};

export default Card;