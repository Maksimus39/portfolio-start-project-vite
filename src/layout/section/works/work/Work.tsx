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
    min-height: 447px;
    width: 100%;
    margin: 0 auto 78px;

    @media ${Theme.media.mobile} {
        min-width: 344px;
        min-height: 619px;
    }
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

    @media ${Theme.media.mobile} {
        min-width: 344px;
        min-height: 619px;
    }
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
    flex-wrap: wrap;

    @media ${Theme.media.mobile} {
     
        padding: 20px;
    }
`;
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    padding: 0 20px;
    @media ${Theme.media.mobile} {
        flex-direction: column;
        gap: 22px; /* Изменяем с 30px на 22px по макету */
        align-items: flex-start;
    }
`;
const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 434px;
    width: 100%;
    text-align: left;
    gap: 16px;

    @media ${Theme.media.mobile} {
        max-width: 100%;
    }
`;
const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 434px;
    width: 100%;
    height: 215px;
    text-align: left;
    gap: 24px;

    @media ${Theme.media.mobile} {
        max-width: 100%; /* Занимаем всю ширину */
    }
`;
const Title = styled.span`
    //width: 433px;
    width: 100%;
    height: 24px;
    font-family: "Epilogue", serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;

    @media ${Theme.media.mobile} {
        font-size: 15px;
    }
`;
const TitleText = styled.h4`
    font-family: "Epilogue", serif;
    font-weight: 800;
    font-size: 45px;
    line-height: 120%;
    color: ${Theme.colors.primaryBg};

    @media ${Theme.media.mobile} {
        font-weight: 800;
        font-size: 43px;
    }
`;
const Description = styled.p`
    font-family: "Epilogue", serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: ${Theme.colors.primaryBg};

    @media ${Theme.media.mobile} {
        font-weight: 400;
        font-size: 17px;
    }
`;
const Links = styled.div`
    display: flex;
    gap: 16px;
    justify-content: start;
    align-items: start;

    @media ${Theme.media.mobile} {
        width: 96px;
        height: 38px;
        gap: 4px;
    }
`;
const Link = styled.a`
    font-family: "Epilogue", serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #fff;

    @media ${Theme.media.mobile} {
        font-size: 15px;
    }
`;
const TitleOne = styled.span`
    font-family: "Epilogue", serif;
    font-weight: 200;
    font-size: 45px;
`