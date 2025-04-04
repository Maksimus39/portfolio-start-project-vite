// import styled from "styled-components";
//
// type Props = {
//     skillTitle: string
//     skillText: string
// }
// export const Skill = (props: Props) => {
//     const {skillTitle, skillText} = props;
//
//     return (
//         <StyledSkill>
//             <SkillTitle>{skillTitle}</SkillTitle>
//             <SkillText>{skillText}</SkillText>
//         </StyledSkill>
//     );
// };
//
// const StyledSkill = styled.div`
//     width: 33%
// `
// const SkillTitle = styled.h3``
// const SkillText = styled.p``

import styled from "styled-components";

type Props = {
    skillTitle: string
    skillText: string
    index: number // Добавляем пропс для номера
}

export const Skill = (props: Props) => {
    const {skillTitle, skillText, index} = props;

    return (
        <StyledSkill>
            <SkillNumber>{String(index + 1).padStart(2, '0')}.</SkillNumber>
            <SkillContent>
                <SkillTitle>{skillTitle}</SkillTitle>
                <SkillText>{skillText}</SkillText>
            </SkillContent>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 20px;

    width: 30%;

`;

const SkillNumber = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    min-width: 25px; // Фиксированная ширина для выравнивания
`;

const SkillContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const SkillTitle = styled.h3`
    margin: 0;
    //font-size: 18px;
    //color: #333;
`;

const SkillText = styled.p`
    //margin: 4px 0 0 0;
    //font-size: 14px;
    //color: #666;
`;