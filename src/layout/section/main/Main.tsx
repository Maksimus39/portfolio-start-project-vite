import ImagePhoto from "./../../../assets/images/myPhoto.webp"
import styled from "styled-components";

export const Main = () => {
    return (
        <div>
            <div>
                <span>HELLO</span>
                <h2>I`M Maxim</h2>
                <h1>A Web Developer</h1>
            </div>

            <Photo src={ImagePhoto} alt="Photo"/>
        </div>
    );
};


const Photo = styled.img`
    width: 570px;
    height: 570px;
    object-fit: cover;
`