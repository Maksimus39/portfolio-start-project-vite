import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";

const StyledAboutMe = styled.section`
    width: 100%;
    background-color: ${Theme.colors.secondaryBG};
    display: flex;
    justify-content: center;
    padding: 110px 0;
    gap: 79px;
    max-width: 1440px;
    min-height: 540px;
    margin: 0 auto;
    flex-wrap: wrap;
`
const LeftColumn = styled.div`
    width: 511px;
    min-height: 214px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 16px;

    @media ${Theme.media.mobile} {
        width: 334px;
        min-height: 196px;
    }
`
const RightColumn = styled.div`
    width: 437px;
    min-height: 540px;
    display: flex;
    flex-direction: column;
    gap: 204px;
`
const Text = styled.span`
    font-family: Epilogue, serif;
    font-weight: 900;
    font-size: 16px;
    line-height: 150%;
    color: ${Theme.colors.textBg};

    @media ${Theme.media.mobile} {
        width: 82px;
        height: 24px;
        font-weight: 900;
        font-size: 16px;
        color: ${Theme.colors.textBg};
    }
`
const LeftDescription = styled.div`
    width: 100%;
    min-height: 174px;
    color: ${Theme.colors.textBg};
    flex-wrap: wrap;
    font-family: Epilogue, serif;
    font-weight: 254;
    font-size: 48px;
    line-height: 120%;
    font-variant: small-caps;

    text-wrap: wrap;

    @media ${Theme.media.mobile} {
        width: 334px;
        height: 156px;
        gap: 16px;
        padding-right: 89px;
        font-weight: 254;
        font-size: 43px;
    }
`
const MyPhotoLeft = styled.img`
    width: 532px;
    height: 498px;
    object-fit: cover;

    @media ${Theme.media.mobile} {
        width: 306px;
        height: 286px;
        top: 275px;
        left: 20px;
    }
`
const RightDescription = styled.div`
    width: 100%;
    margin: 0 auto;
    min-height: 540px;
    font-family: Roboto, serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: ${Theme.colors.textBg};

    @media ${Theme.media.mobile} {
        width: 337px;
        min-height: 675px;
        top: 602px;
        left: 19px;
        gap: 24px;
    }
`
const MyPhotoRight = styled.img`
    width: 440px;
    height: 412px;
    object-fit: cover;
    margin: 0 auto;

    @media ${Theme.media.mobile} {
        width: 276px;
        height: 258px;
`

export const S = {
    StyledAboutMe,
    LeftColumn,
    RightColumn,
    Text,
    LeftDescription,
    MyPhotoLeft,
    RightDescription,
    MyPhotoRight
}