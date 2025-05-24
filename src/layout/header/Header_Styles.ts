import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

const StyledHeader = styled.header`
    background-color: ${Theme.colors.primaryBg};
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    height: 89px;
`
export const S = {
    StyledHeader
}