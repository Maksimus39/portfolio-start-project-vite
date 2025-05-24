import {S} from "../MobileMenu_Styled.ts";

type Props = {
    menuItems: string[];
}
const MenuMobile = (props: Props) => {
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

export default MenuMobile;