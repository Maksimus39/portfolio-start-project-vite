import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";
import {Skills} from "./layout/section/skills/Skills.tsx";
import {Works} from "./layout/section/works/Works.tsx";
import {AboutMe} from "./layout/section/aboutMe/AboutMe.tsx";
import {Contact} from "./layout/section/contact/Contact.tsx";
import {Footer} from "./layout/section/footer/Footer.tsx";
import {GoToBtn} from "./components/goTobBtn/GoToBtn.tsx";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <AboutMe/>
            <Contact/>
            <Footer/>
            <GoToBtn/>
        </div>
    )
}

export default App