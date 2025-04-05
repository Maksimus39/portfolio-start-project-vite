import styled from "styled-components";

export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Description>
                <LeftColumn>
                    <Title>About Me</Title>
                    <CreativePerspective>I look at usual things with my unsual eyes.</CreativePerspective>
                </LeftColumn>
                <RightColumn>
                    <ApproachDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa
                        sollicitudin
                        amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
                        scelerisque ac adipiscing velit non nulla in amet pellentesque.

                        Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet
                        pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec,
                        habitasse
                        vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu
                        aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta.

                        Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in
                        eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra
                        lectus arcu, tincidunt ultrices pellentesque.
                    </ApproachDescription>
                </RightColumn>

            </Description>
        </StyledAboutMe>
    );
};
const StyledAboutMe = styled.section`
    min-height: 100vh;
    background-color: darkcyan;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LeftColumn = styled.div`
    flex: 1;
    font-size: 48px;
    font-weight: bold;
    line-height: 1.2;
`;

const RightColumn = styled.div`
    flex: 1;
    font-size: 16px;
    line-height: 1.6;
`;

const Description = styled.div`
    width: 1312px;
    height: 540px;
    display: flex;
    gap: 40px;
    align-items: center; /* Добавлено для вертикального выравнивания */
`

const Title = styled.h2``
const CreativePerspective = styled.div``;
const ApproachDescription = styled.div``;
