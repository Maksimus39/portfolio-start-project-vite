import ImagePhoto from "./../../../assets/images/myPhoto.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/container/Container.ts";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <TextWrapper>
                        <HelloText>HELLO</HelloText>
                        <NameText>I'M MAXIM</NameText>
                        <MainTitle>A`m frontend developer</MainTitle>
                    </TextWrapper>

                    <PhotoWrapper>
                        <BackgroundPhoto></BackgroundPhoto>
                        <Photo src={ImagePhoto} alt="Photo"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.div`
    width: 100%;
    background: ${Theme.colors.primaryBg};
    display: flex;
    justify-content: center;
`
const PhotoWrapper = styled.div`
    margin-top: 210px;
    position: relative;
    width: 570px;
    height: 570px;
    margin-left: -240px;
`;
const Photo = styled.img`
    width: 570px;
    height: 570px;
    object-fit: cover;
    opacity: 90%;
    transform: rotate(7.52deg);
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
    transform: rotate(-7.52deg);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
`;
const MainTitle = styled.h1`
    width: 656px;
    height: 194px;
    display: flex;
    justify-content: center;

    font-weight: 600;
    font-size: 52px;
    letter-spacing: 0;
    z-index: 98;
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 99;
`;
const HelloText = styled.span`
    font-family: "Epilogue", serif;
    font-weight: 800;
    font-size: 150px;
    color: ${Theme.colors.accentBg};
    white-space: nowrap;
    letter-spacing: 0;
`;
const NameText = styled.span`
    font-weight: 800;
    font-size: 150px;
    color: ${Theme.colors.accentBg};
    white-space: nowrap;
    letter-spacing: 0;
    margin: 10px 0;
`;