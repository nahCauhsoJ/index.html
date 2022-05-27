import noimg from '../../Data/Images/default.jpg';
import { Text } from '../../Components/AppElements';
import styled from 'styled-components';

export const ProjectBlock = props => {
    const ProjContent = styled.div`
        display: inline-block;
        width: 25%;
        min-width: 250px;
        text-align: center;
        margin: 10px;
        padding: 20px;
        background: ${p => p.theme.color.btn_normal_transparent};
        &:hover {
            cursor: pointer;
            background: ${p => p.theme.color.btn_hover_transparent};
        }

        &:active {
            cursor: pointer;
            background: ${p => p.theme.color.btn_press_transparent};
        }
    `;

    const ProjImage = styled.img`
        width: 80%;
        max-width: 200px;
        height: auto;
    `

    return (
        <ProjContent
            onClick={() => { window.location.href = `${props.link}` }}
        >
            <ProjImage
                src={props.src ? props.src : noimg}
                alt=""
            />
            <Text bold>{props.title}</Text>
            <Text style={{ "overflow": "auto" }}>{props.desc}</Text>
        </ProjContent>
    )
}

export const ProjectSection = styled.div`
`;

