import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme.ts";

const StyledMobileMenu = styled.nav<{ isOpen: boolean }>`
    display: none;

    ${props => props.isOpen && css`
        display: block;
    `}
`
const MobileMenuPopUp = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: ${Theme.colors.MobileMenuPopUp};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    display: flex;
`
const MobileMenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 238px;
    height: 180px;
`
const ListItem = styled.li`
    width: 238px;
    height: 41px;
    border-bottom: 1px solid rgba(130, 130, 130, 1);
    margin: 10px 170px 10px 10px;
`
const Link = styled.a`
    display: flex;

    font-weight: 400;
    color: ${Theme.colors.accentBg};
    font-family: Epilogue, serif;
    font-size: 14px;
`
const SocialList = styled.ul`
    display: flex;
    gap: 12px;
    margin-right: 342px;
`;
const SocialItem = styled.li`
    display: flex;
    list-style: none;
`;
const SocialLinc = styled.a``

const BurgerMenu = styled.span`
    margin-left: 8px;
`
const StyleButton = styled.button`
    background-color: ${Theme.colors.accentBg};
    width: 112px;
    height: 40px;
    padding: 8px 20px;
    color: ${Theme.colors.primaryBg};
    font-weight: 400;
    font-size: 16px;
    border: none;
    cursor: pointer;


    @media ${Theme.media.tablet} {
        margin-left: auto;
        margin-right: 30px;
    }
`

export const S = {
    StyledMobileMenu,
    MobileMenuPopUp,
    MobileMenuList,
    ListItem,
    Link,
    SocialList,
    SocialItem,
    SocialLinc,
    BurgerMenu,
    StyleButton
}