import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <Line/>
            <ContentWrapper>


                <FlexWrapper direction={"row"} align={"center"}>
                    <StyledCopyRight>2022 Resume. All right reserved.</StyledCopyRight>
                    <SocialList>
                        <SocialItem>
                            <SocialLinc>
                                <Icon height={"18px"} width={"10px"} viewBox={"0 0 18 10"} iconId={"tg"}/>
                            </SocialLinc>
                        </SocialItem>
                        <SocialItem>
                            <SocialLinc>
                                <Icon height={"18px"} width={"10px"} viewBox={"0 0 18 10"} iconId={"vk"}/>
                            </SocialLinc>
                        </SocialItem>
                    </SocialList>
                </FlexWrapper>


            </ContentWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 40vh;
    background-color: rgba(240, 248, 255, 0.43);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Line = styled.hr`
    margin: 0;
    width: 1280px;
    height: 3px;
    background-color: black;
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
`;
