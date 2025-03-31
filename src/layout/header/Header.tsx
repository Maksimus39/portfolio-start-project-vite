import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <a href="">
                <img src="" alt=""/>
            </a>
            <nav>
                <ul>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Digital Assets</a></li>
                </ul>
                <button>Let’s Talk</button>
            </nav>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: cadetblue;
`

