
interface TitleProps {
    text: string[];
}
const Title = ({text}:TitleProps) => {
    return (
        <div>
           {
            text.map((i,index) => (
                <h2 key={index} className="text-xl text-center my-1 font-bold ">
                    {i}
                </h2>
            ))  
           }
        </div>
    );
};

export default Title;