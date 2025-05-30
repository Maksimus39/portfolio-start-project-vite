import {S} from "../headerMenu/HeaderMenu_Styles.ts";


type ItemsType = {
    title: string
    href: string
}
const items: ItemsType[] = [
    {
        title: "Technologies",
        href: "technologies"
    },
    {
        title: "Project",
        href: "project"
    },
    {
        title: "About",
        href: "about"
    },
    {
        title: "Digital Assets",
        href: "digital Assets"
    }
]

export const Menu = () => {
    return (
        <>
            {items.map((el, index) => {
                return (
                    <S.ListItem key={index}>
                        <S.NavLink to={el.href}
                                   smooth={true}
                                   activeClass="active"
                                   spy={true}
                        >
                            <S.Span>{el.title}</S.Span>
                        </S.NavLink>
                    </S.ListItem>
                )
            })}
        </>
    );
};

export default Menu;