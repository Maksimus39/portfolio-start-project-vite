import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";
import photo from "./../../../assets/images/myPhoto.webp"

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <LeftColumn>
                <Text>About Me</Text>
                <LeftDescription>I look at usual things with my unsual eyes.</LeftDescription>
                <MyPhotoLeft src={photo} alt="myPhoto"/>
            </LeftColumn>
            <RightColumn>
                <RightDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam consectetur
                    deserunt, dicta
                    dolor dolorum ea explicabo facilis fugit in ipsa iure libero maxime molestias mollitia optio
                    pariatur porro quaerat quibusdam quidem quisquam quo quod sed soluta sunt ullam, ut veritatis!
                    Accusantium animi assumenda, at laboriosam praesentium rem sequi sit voluptatibus! Asperiores
                    consequatur culpa enim libero quaerat quasi sed voluptatibus. Culpa esse hic laboriosam
                    perspiciatis? Accusamus aliquid, assumenda at autem beatae dolore ducimus ea earum enim eos esse ex
                    inventore ipsum iusto laboriosam libero natus necessitatibus non quae rerum sequi sunt tenetur
                    voluptas. A ab accusamus assumenda beatae consequatur, culpa cumque cupiditate dicta distinctio
                    dolores eius esse excepturi exercitationem facilis harum libero mollitia nam nisi non nostrum nulla,
                    possimus quae quaerat quam quasi quis sequi, suscipit? Impedit minus modi quis sapiente soluta
                    vitae! Aperiam atque consequatur dignissimos ea earum explicabo id illo iure molestiae nisi
                    obcaecati, placeat praesentium qui quis quisquam quod reiciendis sint suscipit tenetur voluptatum?
                </RightDescription>
                <MyPhotoRight src={photo} alt="myPhoto"/>
            </RightColumn>
        </StyledAboutMe>
    );
};


const StyledAboutMe = styled.section`
    width: 100%;
    min-width: 1440px;
    min-height: 1470px;
    background-color: ${Theme.colors.secondaryBG};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 79px;
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