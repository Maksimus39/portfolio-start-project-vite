import {S} from "./HeaderMenu_Styles.ts"
import Menu from "../menu/Menu.tsx";

type Props = {
    menuItems: string[];
}

export const HeaderMenu = (props: Props) => {
    return (
        <S.StyledHeaderMenu>
            <S.MenuList>
                <Menu menuItems={props.menuItems}/>
            </S.MenuList>
            <S.StyleButton>Let’s Talk</S.StyleButton>
        </S.StyledHeaderMenu>
    );
};