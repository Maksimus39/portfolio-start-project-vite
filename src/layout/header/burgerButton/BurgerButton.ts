import {Theme} from "../../../styles/Theme.ts";
import styled, {css} from "styled-components";

export const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: 60px;
    right: 38px;
    width: 24px;
    height: 24px;
    z-index: 999999;
    background: none;
    border: none;
    cursor: pointer;

    display: none;
    @media ${Theme.media.tablet} {
        display: block;
    }


    span {
        display: block;
        width: 24px;
        height: 2px;
        background-color: ${Theme.colors.burgerButton};
        position: absolute;
        transition: all 0.3s;

        ${props => props.isOpen && css`
            background-color: transparent;
        `}
        &::before {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${Theme.colors.burgerButton};
            position: absolute;
            top: -8px;
            transform: translateY(-3px);

            ${props => props.isOpen && css`
                transform: rotate(45deg);
                top: 0;
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${Theme.colors.burgerButton};
            position: absolute;
            top: 8px;
            transform: translateY(3px);

            ${props => props.isOpen && css`
                transform: rotate(-45deg);
                top: 0;
            `}
        }
    }
`