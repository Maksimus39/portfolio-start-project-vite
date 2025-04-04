import ImagePhoto from "./../../../assets/images/myPhoto.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <h2>HELLO</h2>
                    <Name>I`M Maxim</Name>
                    <MainTitle>A Web Developer</MainTitle>
                </div>


                <Photo src={ImagePhoto} alt="Photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledMain = styled.div`
    min-height: 100vh;
    background-color: lavender;
`


const Photo = styled.img`
    width: 570px;
    height: 570px;
    object-fit: cover;
    opacity: 90%;
    transform: rotate(7.52deg); /* Поворот на -7.52 градуса */
`

const MainTitle = styled.h1`

`

const Name = styled.h2``