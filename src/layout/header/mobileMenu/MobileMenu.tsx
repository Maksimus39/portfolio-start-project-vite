import {S} from "./MobileMenu_Styled.ts"
import MenuMobile from "./menuMobile/menuMobile.tsx";
import {BurgerButton} from "../burgerButton/BurgerButton.ts";

type Props = {
    menuItems: string[];
}

export const MobileMenu = (props: Props) => {

    return (
        <>
            <S.StyleButton>Let’s Talk</S.StyleButton>
            <BurgerButton isOpen={false}>
                <S.BurgerMenu></S.BurgerMenu>
            </BurgerButton>
            <S.StyledMobileMenu isOpen={false}>
                <S.MobileMenuPopUp>
                    <S.MobileMenuList>
                        <MenuMobile menuItems={props.menuItems}/>
                    </S.MobileMenuList>
                </S.MobileMenuPopUp>
            </S.StyledMobileMenu>
        </>

    );
};