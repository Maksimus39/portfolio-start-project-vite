import {Logo} from "../../../components/logo/Logo.tsx";
import {Button} from "../../../components/Button.tsx";
import {S} from "./Contact_Styles.ts"


export const Contact = () => {
    return (
        <S.StyledContact>
            <S.ContactsPortfolio>
                <S.OneColumn>
                    <Logo/>
                    <S.ContactMenu>
                        <ul>
                            <li><a href="">Projects</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Digital Assets</a></li>
                        </ul>
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