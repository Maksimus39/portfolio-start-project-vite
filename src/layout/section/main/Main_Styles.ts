import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

const StyledMain = styled.div`
    width: 100%;
    background: ${Theme.colors.primaryBg};
    display: flex;
    justify-content: center;
    min-height: 100vh; // Занимает всю высоту экрана

    @media ${Theme.media.mobile} {
        padding: 20px 0; // Добавляем отступы сверху и снизу
    }
`
const PhotoWrapper = styled.div`
    margin-top: 210px;
    position: relative;
    width: 570px;
    height: 570px;
    margin-left: -240px;

    // mobile 
    @media ${Theme.media.mobile} {
        width: 300px;
        height: 300px;
        margin: 50px auto 0; 
        left: 0;
        right: 0;
    }
`
const Photo = styled.img`
    width: 570px;
    height: 570px;
    object-fit: cover;
    opacity: 90%;
    transform: rotate(7.52deg);
    top: 0;
    left: 0;
    z-index: 1;

    // mobile 
    @media ${Theme.media.mobile} {
        width: 100%; // или явно 300px, если нужно
        height: 100%;
    }
`
const BackgroundPhoto = styled.div`
    width: 570px;
    height: 570px;
    background: rgba(231, 231, 231, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    transform: rotate(-7.52deg);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    // mobile
    @media ${Theme.media.mobile} {
        width: 100%;
        height: 100%;
    }
`;
const MainTitle = styled.h1`
    ${font({
    weight: 600,
    Fmax: 52,
    Fmin: 28,
    lineHeight: 1.2,
})}
    width: 656px;
    display: flex;
    justify-content: center;
    letter-spacing: 0;
    z-index: 98;
    white-space: normal; /* Разрешаем перенос по умолчанию */

    /* Мобильная версия */
    @media ${Theme.media.mobile} {
        width: 100%; /* Занимает всю ширину */
        margin: 10px auto;
        height: auto; /* Автоматическая высота */
        text-align: left; /* Центрируем текст */
        word-wrap: break-word; /* Перенос длинных слов */
        overflow-wrap: break-word; /* Современный аналог */
        word-break: break-word; /* Страховка для некоторых браузеров */
        white-space: wrap;
        letter-spacing: -0.5px;
    }

    /* Десктопная версия */
    @media (min-width: 768px) {
        white-space: nowrap; /* Запрещаем перенос на десктопе */
    }
`;
const TextWrapper = styled.div`
    margin-top: 133px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 99;

    max-width: 50%;
    @media ${Theme.media.mobile} {
        margin-top: 50px; // Уменьшаем отступ сверху
        min-height: 40vh; // Занимает 40% высоты экрана

        max-width: 100%;
    }
`;
const HelloText = styled.span`
    ${font({family: "'Epilogue', serif", weight: 800, Fmax: 150, Fmin: 75})}
    margin-top: 133px;
    color: ${Theme.colors.accentBg};
    white-space: nowrap;
    letter-spacing: 0;

    @media ${Theme.media.mobile} {
        white-space: normal;
        // Можно переопределить параметры шрифта для мобильных
        ${font({family: "'Epilogue', serif", weight: 800, Fmax: 80, Fmin: 40})}
    }
`;
const NameText = styled.span`
    ${font({
    family: "'Epilogue', serif",
    weight: 800,
    Fmax: 150,
    Fmin: 75,
    color: Theme.colors.accentBg,
    lineHeight: 1
})}
    white-space: nowrap;
    letter-spacing: 0;
    margin: 10px 0;

    @media ${Theme.media.mobile} {
        ${font({
    family: "'Epilogue', serif",
    weight: 800,
    Fmax: 80,
    Fmin: 40,
    color: Theme.colors.accentBg
})}
        white-space: normal;
    }
`;

export const S = {
    StyledMain,
    PhotoWrapper,
    Photo,
    BackgroundPhoto,
    MainTitle,
    TextWrapper,
    HelloText,
    NameText,
}