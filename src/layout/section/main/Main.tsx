import ImagePhoto from "./../../../assets/images/myPhoto.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <h2>HELLO</h2>
                    <Name>I`m Maxim Minakov</Name>
                    <MainTitle>A Web Developer</MainTitle>
                </div>


                <PhotoWrapper>
                    <BackgroundPhoto></BackgroundPhoto>
                    <Photo src={ImagePhoto} alt="Photo"/>
                </PhotoWrapper>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledMain = styled.div`
    min-height: 100vh;
    background: ${Theme.colors.primaryBg};

`
const PhotoWrapper = styled.div`
    margin-top: 210px;
    position: relative;
    width: 570px;
    height: 570px;
`;

const Photo = styled.img`
    width: 570px;
    height: 570px;
    object-fit: cover;
    opacity: 90%;
    transform: rotate(7.52deg); /* Поворот на -7.52 градуса */
    top: 0;
    left: 0;
    z-index: 1;
`

const BackgroundPhoto = styled.div`
    width: 570px;
    height: 570px;
    background: rgba(231, 231, 231, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    transform: rotate(-7.52deg); /* Поворот на -7.52 градуса */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`;

const MainTitle = styled.h1`
    width: 656px;
    height: 194px;
`

const Name = styled.h2``