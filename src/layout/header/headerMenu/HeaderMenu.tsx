import {S} from "./HeaderMenu_Styles.ts"
import Menu from "../menu/Menu.tsx";



export const HeaderMenu = () => {
    return (
        <S.StyledHeaderMenu>
            <S.MenuList>
                <Menu/>
            </S.MenuList>
            <S.StyleButton>Let’s Talk</S.StyleButton>
        </S.StyledHeaderMenu>
    );
};