import {Icon} from "../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {S} from "./Footer_Styles.ts"

type SocialItemDataType = {
    iconId: string
    href: string
}
const socialItemData: SocialItemDataType[] = [
    {iconId: "tg", href: "https://t.me/Macsimus_Lipeck"},
    {iconId: "vk", href: "https://vk.com/maxsimus_48"},
    {iconId: "whatsapp", href: "https://wa.me/89005918911"},
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
                                        <a href={s.href} target="_blank" rel="noreferrer">
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

