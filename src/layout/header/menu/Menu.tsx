import {S} from "../headerMenu/HeaderMenu_Styles.ts";


export type ItemsType = {
    title: string
    href: string
}
export const items: ItemsType[] = [
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
                            <span>{el.title}</span>
                        </S.NavLink>
                    </S.ListItem>
                )
            })}
        </>
    );
};

export default Menu;