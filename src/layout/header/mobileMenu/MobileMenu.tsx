import {S} from "./MobileMenu_Styled.ts"
import {BurgerButton} from "../burgerButton/BurgerButton.ts";
import Menu from "../menu/Menu.tsx";
import {useState} from "react";


export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <S.StyleButton>Let’s Talk</S.StyleButton>
            <BurgerButton isOpen={isOpen} onClick={toggleMenu}>
                <S.BurgerMenu></S.BurgerMenu>
            </BurgerButton>
            <S.StyledMobileMenu isOpen={isOpen}>
                <S.MobileMenuPopUp>
                    <S.MobileMenuList>
                        <Menu/>
                    </S.MobileMenuList>
                </S.MobileMenuPopUp>
            </S.StyledMobileMenu>
        </>

    );
};