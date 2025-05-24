import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";
import {Button} from "../../../components/Button.tsx";

const StyledContact = styled.section`
    width: 100%;
    height: 290px;
    background-color: ${Theme.colors.primaryBg};
    display: flex;
    justify-content: space-around;

    @media ${Theme.media.mobile} {
        min-height: 302px;
        height: auto;
        padding: 20px 0;
    }
`
const ContactsPortfolio = styled.div`
    width: 1064px;
    height: 146px;
    margin: 80px 188px 208px 188px;
    display: flex;
    justify-content: space-between;

    @media ${Theme.media.mobile} {
        width: 100%;
        margin: 0;
        padding: 0 16px;
        flex-direction: column;
        gap: 24px;
        height: auto;
    }
`
const OneColumn = styled.div`
    @media ${Theme.media.mobile} {
        display: flex;
        flex-direction: column;
    }
`
const TwoColumn = styled.div`
    @media ${Theme.media.mobile} {
        display: flex;
        flex-direction: column;
    }
`
const ContactMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
        list-style: none;
        padding: 6px;
    }

    a {
        width: 106px;
        height: 24px;
        font-family: Epilogue, serif;
        font-weight: 400;
        font-size: 16px;
        text-decoration: none;
        color: black;
    }

    @media ${Theme.media.mobile} {
        ul {
            width: 249px;
            height: 21px;
            gap: 28px;
            padding: 0;
            margin-top: 16px;
        }

        a {
            font-weight: 400;
            font-size: 14px;
        }
    }
`
const TextContact = styled.span`
    width: 400px;
    height: 24px;
    font-family: Epilogue, serif;
    font-weight: 700;
    font-size: 16px;

    @media ${Theme.media.mobile} {
        min-width: 345px;
        height: 24px;
        width: 100%;
        font-weight: 700;
        font-size: 16px;
    }
`
const Field = styled.input`
    width: 258px;
    height: 48px;
    border: 1px solid black;
    padding: 12px;

    @media ${Theme.media.mobile} {
        width: 100%;
        font-weight: 400;
        font-size: 16px;
    }
`
const Paragraph = styled.p`
    width: 400px;
    height: 18px;
    font-family: Roboto, serif;
    font-weight: 400;
    font-size: 12px;
    margin-top: 16px;

    @media ${Theme.media.mobile} {
        width: 100%;
        margin-top: 8px;
        font-weight: 400;
        font-size: 12px;
    }
`
const Wrapper = styled.div`
    margin-top: 16px;
    width: 400px;
    height: 48px;
    gap: 16px;
    display: flex;

    @media ${Theme.media.mobile} {
        display: flex;
        width: 100%;
        min-width: 328px;
        min-height: 48px;
        flex-direction: column;


        gap: 8px;
        height: auto;

        ${Button} {
            width: 127px;
            height: 48px;
            margin-inline-start: 0; /* Современная альтернатива margin-left */
        }
    }
`

export const S = {
    StyledContact,
    ContactsPortfolio,
    OneColumn,
    TwoColumn,
    ContactMenu,
    TextContact,
    Field,
    Paragraph,
    Wrapper,
}