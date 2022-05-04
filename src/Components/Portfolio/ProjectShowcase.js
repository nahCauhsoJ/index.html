import noimg from '../../Data/Images/default.jpg'
import styled from 'styled-components';

export const ProjectBlock = props => {
    const ProjContent = styled.div`
        display: inline-block;
        width: 25%;
        text-align: center;
        margin: 10px;
        padding: 20px;
        background: rgba(255,255,255,0.1);
        &:hover {
            cursor: pointer;
            background: rgba(255,255,255,0.3);
        }
    `;

    return (
        <ProjContent
            onClick={() => { window.location.href = `${props.link}` }}
        >
            <img
                src={props.src ? props.src : noimg}
                alt=""
                width="200"
                height="auto"
            />
            <h3>{props.title}</h3>
            <p style={{ "overflow": "auto" }}>{props.desc}</p>
        </ProjContent>
    )
}

export const ProjectSection = styled.div`
`;

