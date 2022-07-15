import React from 'react';

import logo from '../../assets/logo.png';

import {
    Container,
    ContainerLogo,
    Logo,
    NavMenu,
} from './styles';

const Navbar: React.FC = () => {
    return (
        <Container>        
            <ContainerLogo>
                <Logo src={logo}/>
                <h1>ALBERTO MEDEIROS</h1>
            </ContainerLogo>
            <NavMenu>
                <ul>
                    <li>ALUNO</li>
                    <li>PROFESSOR</li>
                    <li>SALA</li>
                </ul>
            </NavMenu>
        </Container>
    )
}

export default Navbar;