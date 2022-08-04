import React from 'react';

import logo from '../../assets/logo.png';

import {
    Container,
    ContainerLogo,
    Logo,
    NavMenu,
    NavItem,
    MenuButton,
} from './styles';

interface TypeProps {
    setMenuIsVisible: Function
}

const Navbar: React.FC<TypeProps> = ({ setMenuIsVisible }) => {    
    return (
        <Container>        
            <ContainerLogo>
                <Logo src={logo}/>
                <h1>ALBERTO MEDEIROS</h1>
            </ContainerLogo>
            <NavMenu>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/student">Aluno</NavItem>
                <NavItem href="/teacher">Professor</NavItem>
                <NavItem href="/classroom">Sala de aula</NavItem>
            </NavMenu>

            <MenuButton onClick={() => setMenuIsVisible(true)}/>
        </Container>
    )
}

export default Navbar;