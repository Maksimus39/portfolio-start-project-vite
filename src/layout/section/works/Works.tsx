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
            <FlexWrapper direction={"column"} align={"start"} wrap={"wrap"}>
                <TextWrapper>
                    <SectionTitle>MY</SectionTitle>
                    <SectionTitle>PROJECTS</SectionTitle>
                </TextWrapper>


                <Work image={MentalHealth}
                      title={"Mental Health"}
                      titleOne={"A Case Study_"}
                      titleText={"Find Peace in Meditation"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}
                />
                <Work image={FashionShow}
                      title={"Fashion Show"}
                      titleOne={"A Case Study_"}
                      titleText={"Enjoy Fashion Shows From Home"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}
                />
                <Work image={Barbeque}
                      title={"Barbeque"}
                      titleOne={"Branding_"}
                      titleText={"Chicken Barbeque Never Goes Wrong"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."}
                />
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    width: 100vw;
    background-color: ${Theme.colors.primaryBg};
    display: flex;
    justify-content: center;
    align-items: center;
`
const SectionTitle = styled.h2`
    font-family: "Epilogue", serif;
    font-weight: 800;
    font-size: 120px;
    line-height: 93%;

    @media ${Theme.media.mobile} {
        font-size: 65px;
    }
`
const TextWrapper = styled.div`
    margin-top: 170px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 772px;
    height: 224px;

    @media ${Theme.media.mobile} {
        padding: 170px 16px 2216px 11px;
        width: 348px;
        height: 122px;
    }
`;