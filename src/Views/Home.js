import Navbar from "../Components/NavigationBar/Navbar.js";
import { Background, Content } from "../Components/AppElements.js";
import { ProjectSection, ProjectBlock } from "../Components/Portfolio/ProjectShowcase.js" 

export default function Home() {
    document.title = "You have landed on my portfolio.";

    return (
        <Background>
            <Content>
                <h1>Hello, traveller.</h1>
                <h3>And thank you for reading my portfolio.</h3>
                <h4>(It'll be decorated in the future.)</h4>

                <ProjectSection>
                    <ProjectBlock 
                        title="Jessup Room Finder" 
                        link="https://github.com/nahCauhsoJ/jessup_room_finder" 
                        desc="It's like Google Maps but tailor-made for Jessup's Rocklin campus."
                    />
                    <ProjectBlock 
                        title="Matching Game with a Zap" 
                        link="https://github.com/nahCauhsoJ/matching_game_with_a_zap" 
                        desc="It's a simple card matching game, with a small twist."
                    />
                    <ProjectBlock 
                        title="CSCI315" 
                        link="https://github.com/nahCauhsoJ/CSCI315" 
                        desc="One of my college courses which taught full stack development. These are some of the finished assignments I shoved into Github."
                    />
                    <ProjectBlock 
                        title="CSCI351" 
                        link="https://github.com/nahCauhsoJ/CSCI351" 
                        desc="One of my college courses which taught game development using Pygame. This is one of the projects I shoved into Github, involving my first dip into Multiplayer Games."
                    />
                </ProjectSection>
            </Content>
        </Background>
    )
}