import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLink href="">
            <Icon iconId={"react"}/>
        </StyledLink>
    );
};

const StyledLink = styled.a`
`