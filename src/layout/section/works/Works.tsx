import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import MentalHealth from "../../../assets/images/photo-1.webp"
import FashionShow from "../../../assets/images/photo-2.webp"
import Barbeque from "../../../assets/images/photo-3.webp"
import {Theme} from "../../../styles/Theme.ts";

export const Works = () => {
    return (
        <StyledWorks>

            <SectionTitle>MY</SectionTitle>
            <SectionTitle>PROJECTS</SectionTitle>

            <FlexWrapper direction={"column"} align={"center"}>
                <Work image={MentalHealth}
                      title={"Mental Health"}
                      titleText={"A Case Study_Find Peace in Meditation"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}
                />
                <Work image={FashionShow}
                      title={"Fashion Show"}
                      titleText={"A Case Study_Enjoy Fashion Shows From Home"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}
                />
                <Work image={Barbeque}
                      title={"Barbeque"}
                      titleText={"A Case Study_Enjoy Fashion Shows From Home"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}
                />
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: ${Theme.colors.primaryBg};
`

const SectionTitle = styled.h2`
    margin: 0;
`