import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Theme} from "../../../styles/Theme.ts";


export const Skills = () => {

    return (
        <StyledSkills>

                <FlexWrapper wrap={"wrap"} justify={"space-around"}>
                    <Skill skillTitle={"React"}
                           skillText={"React — это популярная JavaScript-библиотека для создания динамичных и быстрых пользовательских  интерфейсов с помощью компонуемых, переиспользуемых компонентов и виртуального DOM."}
                           index={0}/>
                    <Skill skillTitle={"HTML"}
                           skillText={"HTML (HyperText Markup Language) — стандартный язык разметки для создания структуры веб-страниц с помощью тегов, атрибутов и элементов."}
                           index={1}
                    />
                    <Skill skillTitle={"CSS"}
                           skillText={"CSS (Cascading Style Sheets) — язык стилей для оформления HTML-документов, управляющий цветами, шрифтами, макетом и анимацией элементов."}
                           index={2}
                    />
                    <Skill skillTitle={"JavaScript"}
                           skillText={"JavaScript — мультипарадигменный язык программирования для создания интерактивности на веб-страницах, работающий на стороне клиента и сервера (Node.js)."}
                           index={3}
                    />

                    <Skill skillTitle={"Redux"}
                           skillText={"Redux — библиотека для управления состоянием JavaScript-приложений через единый хранилище (store), работающая на принципах иммутабельности и одностороннего потока данных."}
                           index={4}
                    />
                    <Skill skillTitle={"RTK 2.0"}
                           skillText={"Redux Toolkit (RTK 2.0) — официальная библиотека для эффективной работы с Redux, упрощающая настройку хранилища, редьюсеров и асинхронной логики."}
                           index={5}
                    />
                    <Skill skillTitle={"Styled Components"}
                           skillText={"Styled Components — библиотека для CSS-in-JS, позволяющая писать стили в JavaScript с автоматической генерацией уникальных классов и поддержкой темы."}
                           index={6}
                    />
                </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    //margin: 0 auto;
    width: 100%;
    background-color: ${Theme.colors.secondaryBG};
    max-width: 1440px;
    min-height: 597px;
    padding: 102px 52px 144px 52px;
    margin-top: 106px;
`