import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLink href="">
            <a href="https://react.dev/blog/2024/12/05/react-19" target={"_blank"}>
                <Icon iconId={"react"}/>
            </a>
        </StyledLink>
    );
};

const StyledLink = styled.a`
`