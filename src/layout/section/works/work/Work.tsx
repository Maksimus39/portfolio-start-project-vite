import {S} from "./Work_Styles.ts"

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
        <S.StyledWork>
            <S.ImageContainer>
                <S.Image src={image} alt="Photo"/>
                <S.TextOverlay>
                    <S.ContentWrapper>
                        <S.LeftContent>
                            <S.Title>{title}</S.Title>
                            <S.TitleOne>{titleOne}</S.TitleOne>
                            <S.TitleText>{titleText}</S.TitleText>
                        </S.LeftContent>
                        <S.RightContent>
                            <S.Description>{description}</S.Description>
                            <S.Links>
                                <S.Link href={"#"}>View</S.Link>
                                <S.Link href={"#"}>More</S.Link>
                            </S.Links>
                        </S.RightContent>
                    </S.ContentWrapper>
                </S.TextOverlay>
            </S.ImageContainer>
        </S.StyledWork>
    );
};

