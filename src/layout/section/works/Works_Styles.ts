import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";

const StyledWorks = styled.section`
    min-height: 100vh;
    max-width: 1040px;
    background-color: ${Theme.colors.primaryBg};
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    padding: 0 20px; /* Добавляем общие отступы от краёв */
    box-sizing: border-box; /* Чтобы padding не увеличивал ширину */

    @media ${Theme.media.mobile} {
        padding: 0 15px; /* Меньшие отступы на мобильных */
    }
`
const SectionTitle = styled.h2`
    font-family: "Epilogue", serif;
    font-weight: 800;
    font-size: 120px;
    line-height: 93%;

    @media ${Theme.media.mobile} {
        font-size: 65px;
    }
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 772px; /* Заменяем width на max-width */
    width: 100%; /* Добавляем */
    margin: 170px 0 70px; /* Убираем горизонтальные margin */
    padding: 0; /* Убираем padding, так как он теперь в StyledWorks */

    @media ${Theme.media.mobile} {
        max-width: 348px;
        margin: 70px 0 59px; /* Вертикальные отступы */
        padding: 0; /* Переносим padding в родительский контейнер */
    }
`;

export const S={
    StyledWorks,
    SectionTitle,
    TextWrapper
}