import styled from "styled-components";
import {font} from "../../../../styles/Common.ts";
import {Theme} from "../../../../styles/Theme.ts";

const StyledSkill = styled.div`
    display: flex;
    flex-grow: 1;
    column-gap: 8px;
    row-gap: 59px;
    margin-bottom: 20px;
    width: 440px;
    min-height: 146px;
    
    @media ${Theme.media.mobile} {
        width: 300px;
        min-height: 114px;
        column-gap: 40px;
    }
`;
const SkillNumber = styled.span`
    display: flex;
    flex-direction: row;
    ${font({
    family: "Epilogue",
    weight: 100,
    color: Theme.colors.primaryBg,
    Fmin: 45,  // минимальный размер для мобильных
    Fmax: 70   // максимальный размер для десктопов
})}

    @media ${Theme.media.mobile} {
    font-weight: 100; // это можно убрать, так как вес уже задан в font()
}
`;
const SkillContent = styled.div`
    display: flex;
    flex-direction: column;
`;
const SkillTitle = styled.h3`
    ${font({
    family: "Epilogue",
    weight: 300,
    color: Theme.colors.primaryBg,
    Fmin: 25,  // Минимальный размер (мобильные)
    Fmax: 30   // Максимальный размер (десктопы)
})}

    @media ${Theme.media.mobile} {
    font-weight: 300; // Можно оставить, если нужны дополнительные стили
}
`;
const SkillText = styled.p`
    ${font({
    family: "Epilogue",
    weight: 200,
    color: Theme.colors.primaryBg,
    lineHeight: '123%',  // Сохраняем line-height
    Fmin: 14,  // Минимальный размер (мобильные)
    Fmax: 18   // Максимальный размер (десктопы)
})}

    @media ${Theme.media.mobile} {
    font-weight: 200; // Можно оставить, если нужны дополнительные стили
}
`;
const Wrapper = styled.div`
    width: 100%; // Ширина 100% от родительского контейнера
    height: auto; // Высота автоматическая
    display: flex;
    flex-direction: row;
    align-items: flex-start; // Выравнивание по верхнему краю
    gap: 35px;
`

export const S = {
    StyledSkill,
    SkillNumber,
    SkillContent,
    SkillTitle,
    SkillText,
    Wrapper
}