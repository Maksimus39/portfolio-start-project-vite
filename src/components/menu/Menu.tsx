import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";


type Props = {
    menuItems: string[];
}
export const Menu = (props: Props) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((el, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="">{el}</Link>
                        </ListItem>
                    )
                })}
                <StyleButton>Let’s Talk</StyleButton>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
        align-items: center;
        justify-content: center;
    }
`
const StyleButton = styled.button`
    background-color: ${Theme.colors.accentBg};
    width: 112px;
    height: 40px;
    padding: 8px 20px 8px 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Theme.colors.primaryBg};
    font-weight: 400;
    font-size: 16px;
    
`
const ListItem = styled.li``
const Link = styled.a`
    font-weight: 400;
    font-size: 16px;
    color: ${Theme.colors.accentBg};
`