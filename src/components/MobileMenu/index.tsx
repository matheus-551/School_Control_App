import React from 'react';

import {
    Container,
    Nav,
    NavItem,
} from './styles';

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

interface Props {
    menuIsVisible: boolean,
    setMenuIsVisible: Function
}

const MobileMenu: React.FC<Props> = ({menuIsVisible, setMenuIsVisible}) => {
    return (
        <Container isVisible={menuIsVisible}>
            <CloseOutline width={45} onClick={() => setMenuIsVisible(false)}/>
            <Nav>
                <NavItem href="/">Home</NavItem>
                <NavItem href="/student">Aluno</NavItem>
                <NavItem href="/teacher">Professor</NavItem>
                <NavItem href="/classroom">Sala de aula</NavItem>
            </Nav>
        </Container>
    )
}

export default MobileMenu;