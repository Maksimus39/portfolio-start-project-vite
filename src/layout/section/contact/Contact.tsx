import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo.tsx";
import {Button} from "../../../components/Button.tsx";
import {Theme} from "../../../styles/Theme.ts";

export const Contact = () => {
    return (
        <StyledContact>
            <ContactsPortfolio>
                <div>
                    <Logo/>
                    <ContactMenu>
                        <ul>
                            <li><a href="">Projects</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Digital Assets</a></li>
                        </ul>
                    </ContactMenu>
                </div>
                <div>
                    <TextContact>
                        Subscribe to my emailing list
                    </TextContact>
                    <div>
                        <Field as={"input"} placeholder={"Enter your email"}/>
                        <Button>Subscribe</Button>
                        <Paragraph>By subscribing you agree to with our Privacy Policy</Paragraph>
                    </div>

                </div>
            </ContactsPortfolio>

        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 50vh;
    background-color: ${Theme.colors.primaryBg};
    display: flex;
    justify-content: center;
`

const ContactsPortfolio = styled.div`
    width: 1064px;
    height: 146px;
    margin: 80px 188px 208px 188px;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
`

const ContactMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
        list-style: none;
        padding: 6px;
    }

    a {
        text-decoration: none;
        color: black;
    }
`

const TextContact = styled.span``

const Field = styled.input`
    width: 258px;
    height: 48px;
`


const Paragraph = styled.p`
    width: 400px;
    height: 18px;
`