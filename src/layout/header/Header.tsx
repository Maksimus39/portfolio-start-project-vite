import {Logo} from "../../components/logo/Logo.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {Container} from "../../components/container/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {S} from "./Header_Styles.ts"
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {useEffect, useState} from "react";


export const Header = () => {

    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 768

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, []);


    return (
        <S.StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>

                    {width < breakpoint
                        ? <MobileMenu/>
                        : <HeaderMenu/>
                    }
                </FlexWrapper>
            </Container>
        </S.StyledHeader>
    );
};

