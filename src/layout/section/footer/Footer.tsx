import {Icon} from "../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {S} from "./Footer_Styles.ts"


const socialItemData = [
    {iconId: "tg"},
    {iconId: "vk"}
]


export const Footer = () => {
    return (
        <S.StyledFooter>
            <S.ContentWrapper>
                <FlexWrapper direction={"row"} align={"center"} justify={"space-evenly"}>
                    <S.StyledCopyRight>2025 Resume. All right reserved.</S.StyledCopyRight>
                    <S.SocialList>
                        {socialItemData.map((s, index) => {
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialLinc>
                                        <a href="https://t.me/Macsimus_Lipeck" target="_blank" rel="noreferrer">
                                            <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"}
                                                  iconId={s.iconId}/>
                                        </a>
                                    </S.SocialLinc>
                                </S.SocialItem>
                            )
                        })}
                    </S.SocialList>
                </FlexWrapper>
            </S.ContentWrapper>
        </S.StyledFooter>
    );
};

