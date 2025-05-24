import {S} from "./HeaderMenu_Styles.ts"
import MenuHed from "./menuHed/MenuHed.tsx";

type Props = {
    menuItems: string[];
}

export const HeaderMenu = (props: Props) => {
    return (
        <S.StyledHeaderMenu>
            <S.MenuList>
                <MenuHed menuItems={props.menuItems}/>
            </S.MenuList>
            <S.StyleButton>Let’s Talk</S.StyleButton>
        </S.StyledHeaderMenu>
    );
};