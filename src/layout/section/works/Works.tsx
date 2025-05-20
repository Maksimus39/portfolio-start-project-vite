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
            <FlexWrapper direction={"column"} align={"start"} wrap={"wrap"} width={'100%'}>
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
    max-width: 1040px;
    background-color: ${Theme.colors.primaryBg};
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    padding: 0 20px; /* Добавляем общие отступы от краёв */
    box-sizing: border-box; /* Чтобы padding не увеличивал ширину */

    @media ${Theme.media.mobile} {
        padding: 0 15px; /* Меньшие отступы на мобильных */
    }
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 772px; /* Заменяем width на max-width */
    width: 100%; /* Добавляем */
    margin: 170px 0 70px; /* Убираем горизонтальные margin */
    padding: 0; /* Убираем padding, так как он теперь в StyledWorks */

    @media ${Theme.media.mobile} {
        max-width: 348px;
        margin: 70px 0 59px; /* Вертикальные отступы */
        padding: 0; /* Переносим padding в родительский контейнер */
    }
`;