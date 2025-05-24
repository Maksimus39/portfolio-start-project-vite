import {Icon} from "../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {S} from "./Footer_Styles.ts"


export const Footer = () => {
    return (
        <S.StyledFooter>
            <S.ContentWrapper>
                <FlexWrapper direction={"row"} align={"center"} justify={"space-evenly"}>
                    <S.StyledCopyRight>2025 Resume. All right reserved.</S.StyledCopyRight>
                    <S.SocialList>
                        <S.SocialItem>
                            <S.SocialLinc>
                                <a href="https://t.me/Macsimus_Lipeck" target="_blank" rel="noreferrer">
                                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"tg"}/>
                                </a>
                            </S.SocialLinc>
                        </S.SocialItem>
                        <S.SocialItem>
                            <S.SocialLinc>
                                <a href="https://vk.com/al_feed.php" target="_blank" rel="noreferrer">
                                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"vk"}/>
                                </a>
                            </S.SocialLinc>
                        </S.SocialItem>
                    </S.SocialList>
                </FlexWrapper>
            </S.ContentWrapper>
        </S.StyledFooter>
    );
};

