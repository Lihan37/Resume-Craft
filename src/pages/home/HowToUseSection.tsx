import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/common/Card";
import Title from "../../components/common/Title";

interface ICard {
  id: number;
  title: string;
  description: string;
  image: string;
}
const HowToUseSection: React.FC = () => {
  const [data, setData] = useState<ICard[]>([]);

  useEffect(() => {
    axios
      .get("howtoUse.json")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Title
        text={[
          "Build Your Resume/CV with the help of",
          "ResumeCraft following just these 4 steps",
        ]}
      />
      <div
        className="grid mt-10
      grid-cols-1 gap-4
      md:grid-cols-3 lg:grid-cols-4">
        {data.map((i) => (
          <Card
            key={i.id}
            id={i.id}
            image={i.image}
            title={i.title}
            description={i.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HowToUseSection;
