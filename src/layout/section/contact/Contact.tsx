import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo.tsx";
import {Button} from "../../../components/Button.tsx";
import {Theme} from "../../../styles/Theme.ts";

export const Contact = () => {
    return (
        <StyledContact>
            <ContactsPortfolio>
                <OneColumn>
                    <Logo/>
                    <ContactMenu>
                        <ul>
                            <li><a href="">Projects</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Digital Assets</a></li>
                        </ul>
                    </ContactMenu>
                </OneColumn>
                <TwoColumn>
                    <TextContact>
                        Subscribe to my emailing list
                    </TextContact>
                    <Wrapper>
                        <Field as={"input"} placeholder={"Enter your email"}/>
                        <Button>Subscribe</Button>
                    </Wrapper>
                     <Paragraph>By subscribing you agree to with our Privacy Policy</Paragraph>  

                </TwoColumn>
            </ContactsPortfolio>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    width: 100%;
    height: 290px;
    background-color: ${Theme.colors.primaryBg};
    display: flex;
    justify-content: space-around;

    @media ${Theme.media.mobile} {
        width: 345px;
        min-height: 302px;
    }
`
const ContactsPortfolio = styled.div`
    width: 1064px;
    height: 146px;
    margin: 80px 188px 208px 188px;
    display: flex;
    justify-content: space-between;

    @media ${Theme.media.mobile} {
       display: flex;
        flex-direction: column;
    }
`
const OneColumn = styled.div``
const TwoColumn = styled.div``

const ContactMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
        list-style: none;
        padding: 6px;
    }

    a {
        width: 106px;
        height: 24px;
        font-family: Epilogue, serif;
        font-weight: 400;
        font-size: 16px;
        text-decoration: none;
        color: black;
    }
`
const TextContact = styled.span`
    width: 400px;
    height: 24px;
    font-family: Epilogue, serif;
    font-weight: 700;
    font-size: 16px;
`
const Field = styled.input`
    width: 258px;
    height: 48px;
    border: 1px solid black;
    padding: 12px;
`
const Paragraph = styled.p`
    width: 400px;
    height: 18px;
    font-family: Roboto, serif;
    font-weight: 400;
    font-size: 12px;
      margin-top: 16px;  
`

const Wrapper = styled.div`
    margin-top: 16px;
    width: 400px;
    height: 48px;
    gap: 16px;
    display: flex;

    @media ${Theme.media.mobile} {
        display: flex;
        flex-direction: column;
    }
`