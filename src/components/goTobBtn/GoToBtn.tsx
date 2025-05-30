import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from 'react-scroll';
import {useEffect, useState} from "react";


export const GoToBtn = () => {
    const [showBtn, setShowBtn] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [showBtn])

    return (
        <>
            {showBtn && <StyledGoToBtn onClick={() => {
                scroll.scrollToTop()
            }}>
                <Icon iconId={"goToBtn"} width={"16px"} height={"15px"} viewBox={"0 0 16 15"}/>
            </StyledGoToBtn>}
        </>
    );
};

const StyledGoToBtn = styled.button`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`