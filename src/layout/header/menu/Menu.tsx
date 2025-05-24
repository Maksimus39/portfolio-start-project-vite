import {S} from "../headerMenu/HeaderMenu_Styles.ts";


type Props = {
    menuItems: string[];
}
export const Menu = (props: Props) => {
    return (
        <>
            {props.menuItems.map((el, index) => {
                return (
                    <S.ListItem key={index}>
                        <S.Link href="">{el}</S.Link>
                    </S.ListItem>
                )
            })}
        </>
    );
};

export default Menu;