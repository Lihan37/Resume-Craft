import Button from "../../../components/common/Button";
import { Container } from "../../../components/common/Container";
import SectionHeader from "../../../components/common/SectionHeader";


interface HeaderForCV {
    sectionHeader: string;
    button: string;
    description: string;
    image: string;
}

const HeaderResume: React.FC<HeaderForCV> = ({ sectionHeader, description,button,image }) => {
    return (
        <Container >
            <div className="lg:flex lg:flex-row flex flex-col-reverse justify-between items-center">
                <div className="flex-1">
                    <SectionHeader>
                        {" "}
                        <p className="font-bold text-left">
                            {sectionHeader}
                        </p>
                    </SectionHeader>
                    <p className="font-mono text-sm md:text-base xl:text-lg max-w-md xl:max-w-xl text-c-dark-light  lg:pt-7 xl:pt-14">
                       {description}
                    </p>
                    <div className=" flex justify-center md:justify-start items-center gap-10 py-10 pb-14">
                        <Button>
                            {button}
                        </Button>
                    </div>
                </div>
                <div className="flex-1">
                    <img
                        src={image}
                        alt=""
                    />
                </div>
            </div>
        </Container>
    );
};

export default HeaderResume;
