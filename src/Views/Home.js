import Navbar from "../Components/NavigationBar/Navbar.js";
import { Background, Content, Text, Title } from "../Components/AppElements.js";
import { ProjectSection, ProjectBlock } from "../Components/Portfolio/ProjectShowcase.js"
import jessup_room_finder from "../Data/Images/jessup_room_finder.jpg";
import matching_game from "../Data/Images/matching_game.jpg";
import coursework from "../Data/Images/coursework.png";


export default function Home() {
    document.title = "You have landed on my portfolio.";

    return (
        <Background>
            <Content>
                <Title>Hi. I'm Joshua Chan</Title>
                <Text>I am a recent graudate, majored in Computer Science.</Text>

                <ProjectSection>
                    <ProjectBlock 
                        title="Jessup Room Finder" 
                        link="https://github.com/nahCauhsoJ/jessup_room_finder" 
                        desc="A navigation app similar to Google Maps, but tailored to the campus of my college.
                        It helps new students and guests to find the best path from their location to the destination."
                        src={jessup_room_finder}
                    />
                    <ProjectBlock 
                        title="Matching Game with a Zap" 
                        link="https://github.com/nahCauhsoJ/matching_game_with_a_zap" 
                        desc="An android game about a very fast-paced card matching game."
                        src={matching_game}
                    />
                    <ProjectBlock 
                        title="CSCI315" 
                        link="https://github.com/nahCauhsoJ/CSCI315" 
                        desc="One of my college courses which taught full stack development.
                        These are some of the finished assignments I stored in Github."
                        src={coursework}
                    />
                    <ProjectBlock 
                        title="CSCI351" 
                        link="https://github.com/nahCauhsoJ/CSCI351" 
                        desc="One of my college courses which taught game development using Pygame.
                        This is one of the projects I stored in Github, which involves multiplayer mechanics."
                        src={coursework}
                    />
                </ProjectSection>
            </Content>
        </Background>
    )
}