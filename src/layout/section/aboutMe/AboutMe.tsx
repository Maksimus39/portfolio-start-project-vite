import styled from "styled-components";
import myPhoto from "../../../assets/images/myPhoto.webp"

export const AboutMe = () => {
    return (
        <StyledAboutMe>
                <LeftColumn>
                    <Text>About Me</Text>
                    <LeftDescription>I look at usual things with my unsual eyes.</LeftDescription>
                    <MyPhotoLeft src={myPhoto} alt="myPhoto"/>
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
                    <MyPhotoRight src={myPhoto} alt="myPhoto"/>
                </RightColumn>
        </StyledAboutMe>
    );
};


const StyledAboutMe = styled.section`
    min-width: 1440px;
    min-height: 1470px;
    background-color: darkcyan;
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    padding-top: 109px;
`
const LeftColumn = styled.div`
    width: 511px;
    height: 214px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const RightColumn = styled.div`
    width: 437px;
    height: 540px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Text = styled.span`
`
const LeftDescription = styled.div``
const MyPhotoLeft = styled.img`
    width: 532px;
    height: 498px;
    object-fit: cover;
`
const RightDescription = styled.div`
    width: 437px;
    height: 540px;
`
const MyPhotoRight = styled.img`
    width: 440px;
    height: 412px;
    object-fit: cover;
`