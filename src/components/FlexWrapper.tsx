import styled from "styled-components";

type FlexWrapperProps = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    width?: string
}
export const FlexWrapper = styled.div<FlexWrapperProps>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    width: ${props => props.width || "unset"};
    height: 100%;
`