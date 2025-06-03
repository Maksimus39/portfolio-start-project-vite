import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Skill} from "./skill/Skill.tsx";
import {S} from "./Skills_Style.ts"
import {Fade} from "react-awesome-reveal";

type SkillType = {
    index: number
    skillTitle: string
    skillText: string
}
const skill: SkillType[] = [
    {
        index: 0,
        skillTitle: "HTML",
        skillText: "HTML (HyperText Markup Language) — стандартный язык разметки для создания структуры веб-страниц с помощью тегов, атрибутов и элементов."
    },
    {
        index: 1,
        skillTitle: "CSS",
        skillText: "CSS (Cascading Style Sheets) — язык стилей для оформления HTML-документов, управляющий цветами, шрифтами, макетом и анимацией элементов."
    },
    {
        index: 2,
        skillTitle: "Styled Components",
        skillText: "Styled Components — библиотека для CSS-in-JS, позволяющая писать стили в JavaScript с автоматической генерацией уникальных классов и поддержкой темы."
    },
    {
        index: 3,
        skillTitle: "JavaScript",
        skillText: "JavaScript — мультипарадигменный язык программирования для создания интерактивности на веб-страницах, работающий на стороне клиента и сервера (Node.js)."
    },
    {
        index: 4,
        skillTitle: "React",
        skillText: "React — это популярная JavaScript-библиотека для создания динамичных и быстрых пользовательских интерфейсов с помощью компонуемых, переиспользуемых компонентов и виртуального DOM."
    },
    {
        index: 5,
        skillTitle: "Redux",
        skillText: "Redux — библиотека для управления состоянием JavaScript-приложений через единый хранилище (store), работающая на принципах иммутабельности и одностороннего потока данных."
    },
    {
        index: 6,
        skillTitle: "RTK 2.0",
        skillText: "Redux Toolkit (RTK 2.0) — официальная библиотека для эффективной работы с Redux, упрощающая настройку хранилища, редьюсеров и асинхронной логики."
    },
    {
        index: 7,
        skillTitle: "Postman",
        skillText: "Postman — инструмент для тестирования API, автоматизации запросов, мокинга и документирования."
    }
]

export const Skills = () => {
    return (
        <S.StyledSkills id={"technologies"}>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                <Fade cascade={true} damping={0.2}>
                    {skill.map(el => {
                        return (
                            <Skill skillTitle={el.skillTitle}
                                   skillText={el.skillText}
                                   index={el.index}/>
                        )
                    })}
                </Fade>

            </FlexWrapper>
        </S.StyledSkills>
    );
};