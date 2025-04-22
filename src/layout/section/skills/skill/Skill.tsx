import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Theme} from "../../../../styles/Theme.ts";

type Props = {
    skillTitle: string
    skillText: string
    index: number
}

export const Skill = (props: Props) => {
    const {skillTitle, skillText, index} = props;

    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"flex-start"}>
                <Wrapper>
                    <SkillNumber>{String(index + 1).padStart(2, '0')}.</SkillNumber>
                    <SkillContent>
                        <SkillTitle>{skillTitle}</SkillTitle>
                        <SkillText>{skillText}</SkillText>
                    </SkillContent>
                </Wrapper>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    width: 325px;
`;
const SkillNumber = styled.span`
    display: flex;
    flex-direction: row;
    color: ${Theme.colors.primaryBg};
    font-family: "Epilogue", serif;
    font-weight: 100;
    font-size: 70px;
`;
const SkillContent = styled.div`
    display: flex;
    flex-direction: column;
`;
const SkillTitle = styled.h3`
    font-family: "Epilogue", serif;
    font-weight: 300;
    font-size: 30px;
    color: ${Theme.colors.primaryBg};
`;
const SkillText = styled.p`
    font-family: "Epilogue", serif;
    font-weight: 200;
    font-size: 18px;
    line-height: 123%;
    color: ${Theme.colors.primaryBg};
`;
const Wrapper = styled.div`
    width: 100%; // Ширина 100% от родительского контейнера
    height: auto; // Высота автоматическая
    display: flex;
    flex-direction: row;
    align-items: flex-start; // Выравнивание по верхнему краю
    gap: 35px;
`