import styled from "styled-components";
import {Theme} from "../../../../styles/Theme.ts";

type Props = {
    image: string;
    title: string;
    titleOne: string;
    titleText: string;
    description: string;
};

export const Work = (props: Props) => {
    const {image, title, titleOne, titleText, description} = props;

    return (
        <StyledWork>
            <ImageContainer>
                <Image src={image} alt="Photo"/>
                <TextOverlay>
                    <ContentWrapper>
                        <LeftContent>
                            <Title>{title}</Title>
                            <TitleOne>{titleOne}</TitleOne>
                            <TitleText>{titleText}</TitleText>
                        </LeftContent>
                        <RightContent>
                            <Description>{description}</Description>
                            <Links>
                                <Link href={"#"}>View</Link>
                                <Link href={"#"}>More</Link>
                            </Links>
                        </RightContent>
                    </ContentWrapper>
                </TextOverlay>
            </ImageContainer>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    min-width: 1040px;
    min-height: 447px;
    width: 100%;
    margin-bottom: 78px;
`;
const ImageContainer = styled.div`
    position: relative;
    width: 100%;
`;
const Image = styled.img`
    width: 100%;
    height: 447px;
    object-fit: cover;
    display: block;
`;
const TextOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
`;
const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    gap: 81px;
`;
const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 434px;
    height: 202px;
    text-align: left;
    gap: 16px;
`;
const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 434px;
    height: 215px;
    text-align: left;
    gap: 24px;
`;
const Title = styled.span`
    width: 433px;
    height: 24px;
    font-family: "Epilogue", serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
`;
const TitleText = styled.h4`
    font-family: "Epilogue", serif;
    font-weight: 800;
    font-size: 45px;
    line-height: 120%;
    color: ${Theme.colors.primaryBg};
`;
const Description = styled.p`
    font-family: "Epilogue", serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: ${Theme.colors.primaryBg};
`;
const Links = styled.div`
    display: flex;
    gap: 16px;
    justify-content: start;
    align-items: start;
`;
const Link = styled.a`
    font-family: "Epilogue", serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #fff;
`;
const TitleOne = styled.span`
    font-family: "Epilogue", serif;
    font-weight: 200;
    font-size: 45px;
`