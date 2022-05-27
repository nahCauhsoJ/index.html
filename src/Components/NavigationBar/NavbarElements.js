//import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';



export const NavBar = styled.div``;

export const NavHeader = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background: ${p => p.theme.color.header};
  vertical-align: middle;
`;

export const NavIcon = styled.div`
  display: flex;
  height: 50px;
  color: #888888;
  margin-left: auto;
  padding-right: 20px;
  align-items: center;
  white-space: nowrap;
`;

export const NavMenu = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  max-width: 300px;
  flex-direction: column;
  height: 100%;
  background: #111111;

  z-index: 69;

  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
`;

export const NavLink = styled(Link)`
  color: #aaaaaa;
  display: flex;
  text-decoration: none;
  padding: 1rem 1rem;
  cursor: pointer;
  background: transparent;
  &.active {
    background: #555555;
  }
`;

export const NavToggle = props => {
  const Btn = styled.button`
    display: flex;
    align-items: center;
    width: 30px;
    height: 30px;
    margin: 10px;
    background: ${p => p.theme.color.btn_normal};

    &:hover {
      background: ${p => p.theme.color.btn_hover};
    }

    &:active {
      background: ${p => p.theme.color.btn_press};
    }
  `;

  return (
    <Btn onClick={props.onClick}>三</Btn>
  )
}

export const NavTint = props => {
  const Tinted = styled.div`
  position: absolute;
  background: rgba(0,0,0,0.3);
  width: 100%;
  height: 100%;
  z-index: 68;
  `;

  return (
    <Tinted onClick={props.onClick}></Tinted>
  )
}