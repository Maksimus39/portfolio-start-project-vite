import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {S} from "./Skill_Styles.ts"


type Props = {
    skillTitle: string
    skillText: string
    index: number
}

export const Skill = (props: Props) => {
    const {skillTitle, skillText, index} = props;

    return (
        <S.StyledSkill>
            <FlexWrapper direction={"column"} align={"flex-start"}>
                <S.Wrapper>
                    <S.SkillNumber>{String(index + 1).padStart(2, '0')}.</S.SkillNumber>
                    <S.SkillContent>
                        <S.SkillTitle>{skillTitle}</S.SkillTitle>
                        <S.SkillText>{skillText}</S.SkillText>
                    </S.SkillContent>
                </S.Wrapper>
            </FlexWrapper>
        </S.StyledSkill>
    );
};

