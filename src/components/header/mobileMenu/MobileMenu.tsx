import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme.ts";
import {Icon} from "../../icon/Icon.tsx";


type Props = {
    menuItems: string[];
}

export const MobileMenu = (props: Props) => {


    return (
        <StyledMobileMenu isOpen={false}>
            <MobileMenuPopUp>
                <MobileMenuList>
                    {props.menuItems.map((el, index) => {
                        return (
                            <ListItem key={index}>
                                <Link href="">{el}</Link>
                            </ListItem>
                        )
                    })}
                </MobileMenuList>
                <SocialList>
                    <SocialItem>
                        <SocialLinc>
                            <a href="https://t.me/@Macsimus_Lipeck" target="_blank" rel="noreferrer">
                                <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"tg"}/>
                            </a>
                        </SocialLinc>
                    </SocialItem>
                    <SocialItem>
                        <SocialLinc>
                            <a href="https://vk.com/al_feed.php" target="_blank" rel="noreferrer">
                                <Icon height={"24px"} width={"24px"} viewBox={"0 0 24 24"} iconId={"vk"}/>
                            </a>
                        </SocialLinc>
                    </SocialItem>
                </SocialList>
            </MobileMenuPopUp>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav<{ isOpen: boolean }>`
    display: none;

    ${props => props.isOpen && css`
        display: block;
    `}
`
const MobileMenuPopUp = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: ${Theme.colors.MobileMenuPopUp};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    display: flex;
`
const MobileMenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 238px;
    height: 180px;
`
const ListItem = styled.li`
    width: 238px;
    height: 41px;
    border-bottom: 1px solid rgba(130, 130, 130, 1);
    margin: 10px 170px 10px 10px;
`
const Link = styled.a`
    display: flex;

    font-weight: 400;
    color: ${Theme.colors.accentBg};
    font-family: Epilogue, serif;
    font-size: 14px;
`
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
            //transition: transform 0.3s;
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
            //transition: transform 0.3s;
            transform: translateY(3px);

            ${props => props.isOpen && css`
                transform: rotate(-45deg);
                top: 0;
            `}
        }
    }
`




const SocialList = styled.ul`
    display: flex;
    gap: 12px;
    margin-right: 342px;
`;
const SocialItem = styled.li`
    display: flex;
    list-style: none;
`;
const SocialLinc = styled.a``
