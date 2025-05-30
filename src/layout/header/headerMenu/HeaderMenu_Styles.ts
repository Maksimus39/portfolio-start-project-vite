import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";
import {Link} from "react-scroll";

const StyledHeaderMenu = styled.nav`
    display: flex;
    align-items: center;
    gap: 32px;

    @media ${Theme.media.tablet} {
        justify-content: flex-end;
    }
`
const ListItem = styled.li`
    list-style: none;
    display: flex;
    flex-direction: row;
`
const NavLink = styled(Link)`
    font-weight: 400;
    font-size: 16px;
    color: ${Theme.colors.accentBg};
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;

    /* Стили для активной ссылки */

    &:active {
        font-weight: 700;
        color: ${Theme.colors.BgColor};

        /* Можно добавить подчеркивание или другой индикатор */

        &::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: ${Theme.colors.BgColor};
        }
    }

    &:hover {
        color: ${Theme.colors.BgColor};
    }
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

const Span = styled.span`
    display: flex;
    flex-direction: row;
`

export const S = {
    StyledHeaderMenu,
    ListItem,
    NavLink,
    MenuList,
    StyleButton,
    Span
}