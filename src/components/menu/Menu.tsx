import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">Projects</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Digital Assets</a></li>
                <StyleButton>Let’s Talk</StyleButton>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
    }
`

const StyleButton = styled.button`
    background-color: rgba(45, 44, 44, 1);
`