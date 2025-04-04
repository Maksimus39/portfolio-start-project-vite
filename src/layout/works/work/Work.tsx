import styled from "styled-components";

type Props = {
    image: string;
    title: string;
    titleText: string;
    description: string;
};

export const Work = (props: Props) => {
    const {image, title, titleText, description} = props;

    return (
        <StyledWork>
            <ImageContainer>
                <Image src={image} alt="Photo"/>
                <TextOverlay>
                    <ContentWrapper>
                        <LeftContent>
                            <Title>{title}</Title>
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
    max-width: 1040px;
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
    bottom: 0;  // Растягиваем на всю высоту карточки
    display: flex;
    flex-direction: column;  // Текст будет в столбик
    justify-content: center; // Центрируем по вертикали
    align-items: center;     // Центрируем по горизонтали
    padding: 20px;
    color: white;
`;

const ContentWrapper = styled.div`
    display: flex;
    width: 100%;            // Занимает всю ширину TextOverlay
    max-width: 900px;       // Ограничиваем ширину (опционально)
    justify-content: space-between; // Разделяем на лево/право
`;

const LeftContent = styled.div`
  text-align: left;
`;

const RightContent = styled.div`
    text-align: right;
`;

const Title = styled.h3`
    margin: 0 0 8px 0;
`;

const TitleText = styled.h4`
    //margin: 0 0 12px 0;
    //font-weight: normal;
`;

const Description = styled.p`
    margin: 0 0 16px 0;
`;

const Links = styled.div`
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
`;

const Link = styled.a`
    color: white;
    text-decoration: none;
`;