import React from 'react';

import logo from '../../assets/logo.png';

import {
    Container,
    ContainerLogo,
    Logo,
    NavMenu,
    NavItem,
} from './styles';

const Navbar: React.FC = () => {
    return (
        <Container>        
            <ContainerLogo>
                <Logo src={logo}/>
                <h1>ALBERTO MEDEIROS</h1>
            </ContainerLogo>
            <NavMenu>
                <NavItem>ALUNO</NavItem>
                <NavItem>PROFESSOR</NavItem>
                <NavItem>SALA</NavItem>
            </NavMenu>
        </Container>
    )
}

export default Navbar;