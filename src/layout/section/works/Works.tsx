import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import MentalHealth from "../../../assets/images/photo-1.webp"
import FashionShow from "../../../assets/images/photo-2.webp"
import Barbeque from "../../../assets/images/photo-3.webp"
import {S} from "./Works_Styles.ts"
import {Work} from "./work/Work.tsx";

type WorkType = {
    image: string
    title: string
    titleOne: string
    titleText: string
    description: string
}
const work: WorkType[] = [
    {
        image: MentalHealth,
        title: "Mental Health",
        titleOne: "A Case Study_",
        titleText: "Find Peace in Meditation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
    },
    {
        image: FashionShow,
        title: "Fashion Show",
        titleOne: "A Case Study_",
        titleText: "Enjoy Fashion Shows From Home",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
    },
    {
        image: Barbeque,
        title: "Barbeque",
        titleOne: "Branding_",
        titleText: "Chicken Barbeque Never Goes Wrong",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
    }
]


export const Works = () => {
    return (
        <S.StyledWorks id={"project"}>
            <FlexWrapper direction={"column"} align={"start"} wrap={"wrap"} width={'100%'}>
                <S.TextWrapper>
                    <S.SectionTitle>MY</S.SectionTitle>
                    <S.SectionTitle>PROJECTS</S.SectionTitle>
                </S.TextWrapper>
                {work.map((el, index) => {
                    return (
                        <Work
                            key={index}
                            image={el.image}
                            title={el.title}
                            titleOne={el.titleOne}
                            titleText={el.titleText}
                            description={el.description}/>
                    )
                })}
            </FlexWrapper>
        </S.StyledWorks>
    );
};