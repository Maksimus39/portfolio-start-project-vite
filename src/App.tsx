import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";
import {Skills} from "./layout/section/skills/Skills.tsx";
import {Works} from "./layout/section/works/Works.tsx";
import {AboutMe} from "./layout/section/aboutMe/AboutMe.tsx";
import {Contact} from "./layout/section/contact/Contact.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <AboutMe/>
            <Contact/>
        </div>
    )
}

export default App