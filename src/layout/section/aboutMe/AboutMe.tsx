import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";
import photo from "./../../../assets/images/myPhoto.webp"
import {Container} from "../../../components/container/Container.ts";


export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <ColumnsWrapper>
                    <LeftColumn>
                        <Text>About Me</Text>
                        <LeftDescription>I look at usual things with my unsual eyes.</LeftDescription>
                        <MyPhotoLeft src={photo} alt="myPhoto"/>
                    </LeftColumn>
                    <RightColumn>
                        <RightDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deleniti
                            deserunt dignissimos dolorum error esse, et inventore nemo quaerat quidem quod saepe
                            sapiente suscipit tempora, voluptas. Animi architecto asperiores consectetur dignissimos
                            error est et facilis harum id ipsa iure minus, modi nisi placeat quam velit voluptatem.
                            Accusantium eaque est excepturi id non officia omnis quisquam. Accusantium amet aperiam
                            consequuntur culpa debitis distinctio earum eius est fuga hic id impedit inventore ipsa
                            ipsum laudantium magni modi molestias necessitatibus nemo numquam omnis quaerat quasi
                            quibusdam quisquam quos ratione rerum, sequi similique sint sunt tempora tenetur ullam, unde
                            ut vitae voluptas voluptatum. Accusamus at nisi voluptatibus? Nobis, perspiciatis,
                            provident. At error inventore nostrum? Aperiam, autem beatae deleniti hic ipsum nam
                            praesentium quibusdam quisquam quo sapiente temporibus, tenetur? A esse itaque ratione
                            sapiente! Consequuntur et facilis laborum nesciunt quia. Accusamus distinctio eaque fuga
                            harum nostrum, quod saepe ut? Enim ex minima sapiente similique sint?</RightDescription>
                        <MyPhotoRight src={photo} alt="myPhoto"/>
                    </RightColumn>
                </ColumnsWrapper>
            </Container>
        </StyledAboutMe>
    );
};

const ColumnsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    width: 100%;
`;

const StyledAboutMe = styled.section`
    width: 100%;
    min-width: 1440px;
    min-height: 1470px;
    background-color: ${Theme.colors.secondaryBG};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 110px;
`
const LeftColumn = styled.div`
    width: 511px;
    min-height: 214px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 16px;
`
const RightColumn = styled.div`
    width: 437px;
    min-height: 540px;
    display: flex;
    flex-direction: column;
    gap: 204px;
`
const Text = styled.span`
    font-family: Epilogue, serif;
    font-weight: 900;
    font-size: 16px;
    line-height: 150%;
    color: ${Theme.colors.textBg};
`
const LeftDescription = styled.div`
    width: 100%;
    min-width: 422px;
    min-height: 174px;
    color: ${Theme.colors.textBg};
    flex-wrap: wrap;
    font-family: Epilogue, serif;
    font-weight: 254;
    font-size: 48px;
    line-height: 120%;
    font-variant: small-caps;
`
const MyPhotoLeft = styled.img`
    width: 532px;
    height: 498px;
    object-fit: cover;
`
const RightDescription = styled.div`
    width: 100%;
    min-width: 437px;
    min-height: 540px;
    font-family: Roboto, serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: ${Theme.colors.textBg}
`
const MyPhotoRight = styled.img`
    width: 440px;
    height: 412px;
    object-fit: cover;
`