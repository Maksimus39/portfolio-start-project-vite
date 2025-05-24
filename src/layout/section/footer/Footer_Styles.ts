import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";

const StyledFooter = styled.footer`
    min-height: 120px;
    background-color: ${Theme.colors.primaryBg};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const S = {
    StyledFooter,
    ContentWrapper,
    SocialList,
    SocialItem,
    SocialLinc,
    StyledCopyRight
}