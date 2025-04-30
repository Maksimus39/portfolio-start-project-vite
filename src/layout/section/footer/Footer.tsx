import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Theme} from "../../../styles/Theme.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <Line/>
            <ContentWrapper>
                <FlexWrapper direction={"row"} align={"center"} justify={"space-evenly"}>
                    <StyledCopyRight>2025 Resume. All right reserved.</StyledCopyRight>
                    <SocialList>
                        <SocialItem>
                            <SocialLinc>
                                <a href="https://t.me/@Macsimus_Lipeck" target="_blank" rel="noreferrer">
                                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"tg"}/>
                                </a>
                            </SocialLinc>
                        </SocialItem>
                        <SocialItem>
                            <SocialLinc>
                                <a href="https://vk.com/al_feed.php" target="_blank" rel="noreferrer">
                                    <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"vk"}/>
                                </a>
                            </SocialLinc>
                        </SocialItem>
                    </SocialList>
                </FlexWrapper>
            </ContentWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 120px;
    background-color: ${Theme.colors.primaryBg};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Line = styled.hr`
    margin: 0;
    width: 1280px;
    height: 1px;
    color: ${Theme.colors.textBlack};
`;
const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding-top: 66px;
`;
 const SocialList = styled.ul`
    display: flex;
    gap: 12px;
`;
 const SocialItem = styled.li`
    display: flex;
    list-style: none;
`;
 const SocialLinc = styled.a``

const StyledCopyRight = styled.small`
    font-family: Roboto, serif;
    font-weight: 400;
    font-size: 14px;
    white-space: nowrap;
`;
