import photo from "./../../../assets/images/myPhoto.webp"
import {S} from "./AboutMe_Styles.ts"


export const AboutMe = () => {
    return (
        <S.StyledAboutMe id={"about"}>
                <S.LeftColumn>
                    <S.Text>About Me</S.Text>
                    <S.LeftDescription>I look at usual things with my unsual eyes.</S.LeftDescription>
                    <S.MyPhotoLeft src={photo} alt="myPhoto"/>
                </S.LeftColumn>
                <S.RightColumn>
                    <S.RightDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam consectetur
                        deserunt, dicta
                        dolor dolorum ea explicabo facilis fugit in ipsa iure libero maxime molestias mollitia optio
                        pariatur porro quaerat quibusdam quidem quisquam quo quod sed soluta sunt ullam, ut veritatis!
                        Accusantium animi assumenda, at laboriosam praesentium rem sequi sit voluptatibus! Asperiores
                        consequatur culpa enim libero quaerat quasi sed voluptatibus. Culpa esse hic laboriosam
                        perspiciatis? Accusamus aliquid, assumenda at autem beatae dolore ducimus ea earum enim eos esse
                        ex
                        inventore ipsum iusto laboriosam libero natus necessitatibus non quae rerum sequi sunt tenetur
                        voluptas. A ab accusamus assumenda beatae consequatur, culpa cumque cupiditate dicta distinctio
                        dolores eius esse excepturi exercitationem facilis harum libero mollitia nam nisi non nostrum
                        nulla,
                        possimus quae quaerat quam quasi quis sequi, suscipit? Impedit minus modi quis sapiente soluta
                        vitae! Aperiam atque consequatur dignissimos ea earum explicabo id illo iure molestiae nisi
                        obcaecati, placeat praesentium qui quis quisquam quod reiciendis sint suscipit tenetur
                        voluptatum?
                    </S.RightDescription>
                    <S.MyPhotoRight src={photo} alt="myPhoto"/>
                </S.RightColumn>
        </S.StyledAboutMe>
    );
}