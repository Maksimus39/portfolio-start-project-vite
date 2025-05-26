import {Logo} from "../../../components/logo/Logo.tsx";
import {Button} from "../../../components/Button.tsx";
import {S} from "./Contact_Styles.ts"
import Menu from "../../header/menu/Menu.tsx";


export const Contact = () => {
    return (
        <S.StyledContact id={"digital Assets"}>
            <S.ContactsPortfolio>
                <S.OneColumn>
                    <Logo/>
                    <S.ContactMenu>
                        {/*<ul>*/}
                        {/*    <li><a href="">Technologies</a></li>*/}
                        {/*    <li><a href="">Projects</a></li>*/}
                        {/*    <li><a href="">About</a></li>*/}
                        {/*    <li><a href="">Digital Assets</a></li>*/}
                        {/*</ul>*/}
                        <Menu/>
                    </S.ContactMenu>
                </S.OneColumn>
                <S.TwoColumn>
                    <S.TextContact>
                        Subscribe to my emailing list
                    </S.TextContact>
                    <S.Wrapper>
                        <S.Field as={"input"} placeholder={"Enter your email"}/>
                        <Button>Subscribe</Button>
                    </S.Wrapper>
                    <S.Paragraph>By subscribing you agree to with our Privacy Policy</S.Paragraph>
                </S.TwoColumn>
            </S.ContactsPortfolio>
        </S.StyledContact>
    );
};