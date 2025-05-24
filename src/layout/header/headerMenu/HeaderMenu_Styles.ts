import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";

const StyledHeaderMenu = styled.nav`
    display: flex;
    align-items: center;
    gap: 32px;

    @media ${Theme.media.tablet} {
        justify-content: flex-end;
    }
`
const ListItem = styled.li``
const Link = styled.a`
    font-weight: 400;
    font-size: 16px;
    color: ${Theme.colors.accentBg};
`
const MenuList = styled.ul`
    display: flex;
    gap: 32px;
    align-items: center;

    @media ${Theme.media.tablet} {
        display: none;
    }
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
    StyledHeaderMenu,
    ListItem,
    Link,
    MenuList,
    StyleButton,
}