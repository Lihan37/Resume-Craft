import Button from "../../../components/common/Button";
import { Container } from "../../../components/common/Container";
import SectionHeader from "../../../components/common/SectionHeader";
import useCreateResume from "../../../hooks/useCreateResume";
import useCreateCoverLetter from "../../../hooks/useCreateCoverLetter";
interface HeaderForCV {
  sectionHeader: string;
  button: string;
  description: string;
  image: string;
  create: string;
}

const HeaderResume: React.FC<HeaderForCV> = ({
  sectionHeader,
  description,
  button,
  image,
  create = "resume",
}) => {
  const [createResume] = useCreateResume();
  const [createCoverLetter] = useCreateCoverLetter();

  const createNew = () => {
    if (create === "resume") {
      createResume();
      return;
    }
    if (create === "coverletter") {
      createCoverLetter();
      return;
    }
  };

  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="space-y-5 lg:space-y-10">
          <SectionHeader>
            <p className="font-bold md:text-left">{sectionHeader}</p>
          </SectionHeader>
          <p className="font-mono text-center md:text-left text-sm md:text-base xl:text-lg max-w-md xl:max-w-xl text-c-dark-light  ">
            {description}
          </p>
          <div className=" flex justify-center md:justify-start items-center gap-10 ">
            <Button onClick={createNew}>{button}</Button>
          </div>
        </div>
        <div className="lg:w-[1100px]">
          <img src={image} alt="image" className=" h-full w-full" />
        </div>
      </div>
    </Container>
  );
};

export default HeaderResume;
