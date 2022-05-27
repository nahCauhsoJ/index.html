import Navbar from "../Components/NavigationBar/Navbar.js";
import { Background, Content } from "../Components/AppElements.js";
import styled from 'styled-components';

const About = () => {
    document.title = "About";

    const Info = styled.p`
        overflow-wrap: break-word;
    `

    return (
        <Background>
            <Content>
                <h1>About Me</h1>
                <div style={{ "background": "rgba(255,255,255,0.3)", "padding": "20px" }}>
                    <Info>LinkedIn: <a href="https://www.linkedin.com/in/chanhauyim/">https://www.linkedin.com/in/chanhauyim/</a></Info>
                    <Info>Email: hau.chan@jessup.edu</Info>
                    <Info>Phone: +1 (916) 298 3321</Info>
                </div>
            </Content>
        </Background>
    );
}
export default About;