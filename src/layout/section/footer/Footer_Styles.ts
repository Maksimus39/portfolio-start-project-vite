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
const SocialLinc = styled.a`
    display: inline-block;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.5); /* Увеличиваем на 10% */
    }

    &:active {
        transform: scale(0.98); /* Небольшое уменьшение при клике */
    }
`
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