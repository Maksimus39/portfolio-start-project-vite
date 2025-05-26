import {S} from "./MobileMenu_Styled.ts"
import {BurgerButton} from "../burgerButton/BurgerButton.ts";
import Menu from "../menu/Menu.tsx";



export const MobileMenu = () => {

    return (
        <>
            <S.StyleButton>Let’s Talk</S.StyleButton>
            <BurgerButton isOpen={true}>
                <S.BurgerMenu></S.BurgerMenu>
            </BurgerButton>
            <S.StyledMobileMenu isOpen={false}>
                <S.MobileMenuPopUp>
                    <S.MobileMenuList>
                        <Menu/>
                    </S.MobileMenuList>
                </S.MobileMenuPopUp>
            </S.StyledMobileMenu>
        </>

    );
};