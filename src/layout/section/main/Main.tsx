import ImagePhoto from "./../../../assets/images/myPhoto.webp"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/container/Container.ts";
import {S} from "./Main_Styles.ts"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main = () => {
    return (
        <S.StyledMain>S.
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.TextWrapper>
                        <S.HelloText>HELLO</S.HelloText>
                        <S.NameText>I'M MAXIM</S.NameText>
                        <S.MainTitle>
                            <S.MainTitle><p>'A`m frontend developer'</p></S.MainTitle>
                            <Typewriter
                                options={{
                                    strings: ['A`m frontend developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>

                    </S.TextWrapper>

                    <Tilt className="parallax-effect-img"
                          tiltMaxAngleX={40}
                          tiltMaxAngleY={40}
                          perspective={800}
                          transitionSpeed={1500}
                          scale={1.1}
                          gyroscope={true}>
                        <S.PhotoWrapper>
                            <S.BackgroundPhoto></S.BackgroundPhoto>
                            <S.Photo src={ImagePhoto} alt="Photo"/>
                        </S.PhotoWrapper>
                    </Tilt>

                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};