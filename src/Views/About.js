import Navbar from "../Components/NavigationBar/Navbar.js";
import { Background, Content } from "../Components/AppElements.js";

const About = () => {

    return (
        <Background>
            <Content>
                <h1>About Me</h1>
                <p>I'll disclose more when I have time...</p>
                <div style={{"background":"rgba(255,255,255,0.3)", "padding":"20px"}}>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/chanhauyim/">https://www.linkedin.com/in/chanhauyim/</a></p>
                    <p>Email: hau.chan@jessup.edu</p>
                </div>
            </Content>
        </Background>
    );
}
export default About;