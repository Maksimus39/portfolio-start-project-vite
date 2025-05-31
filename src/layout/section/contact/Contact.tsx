import {Logo} from "../../../components/logo/Logo.tsx";
import {Button} from "../../../components/Button.tsx";
import {S} from "./Contact_Styles.ts"
import Menu from "../../header/menu/Menu.tsx";
import emailjs from '@emailjs/browser';
import {ElementRef, FormEvent, useRef} from "react";

export const Contact = () => {

    const form = useRef<ElementRef<'form'>>(null);


    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return
        emailjs
            .sendForm('service_b6hzcmt', 'template_pbt5ezu', form.current, {
                publicKey: 'Gxg7cGw_9MpLiHoUM',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.currentTarget.reset()
    }

    return (
        <S.StyledContact id={"digital Assets"}>
            <S.ContactsPortfolio>
                <S.OneColumn>
                    <Logo/>
                    <S.ContactMenu>
                        <Menu/>
                    </S.ContactMenu>
                </S.OneColumn>
                <S.TwoColumn>
                    <S.TextContact>
                        Subscribe to my emailing list
                    </S.TextContact>
                    <form ref={form} onSubmit={sendEmail}>
                        <S.Wrapper>
                            <S.Field
                                as={"input"}
                                placeholder={"Your Email"}
                                name="user_email"
                                type="email"
                                required
                            />
                            <S.Field
                                as={"input"}
                                placeholder={"Your Message"}
                                name="message"
                                required
                            />
                            <Button type="submit">Subscribe</Button>
                        </S.Wrapper>
                    </form>

                    <S.Paragraph>By subscribing you agree to with our Privacy Policy</S.Paragraph>
                </S.TwoColumn>
            </S.ContactsPortfolio>
        </S.StyledContact>
    );
};