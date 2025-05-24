import {Theme} from "../../../styles/Theme.ts";
import styled from "styled-components";

const StyledSkills = styled.section`
    width: 100%;
    background-color: ${Theme.colors.secondaryBG};
    max-width: 1440px;
    min-height: 597px;
    padding: 102px 52px 144px 52px;
    margin: 106px auto 0;

    @media ${Theme.media.mobile} {
        padding: 42px 30px 42px 30px;
    }
`

export const S = {
    StyledSkills
}