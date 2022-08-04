import React, { useState } from 'react';

import { Container, Wrapper } from './styles';

import MobileMenu from '../MobileMenu/index';
import Navbar from '../Navbar';
import AppRoutes from '../../AppRoutes';

const Layout: React.FC = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <Container>
            <Wrapper>
                <MobileMenu
                    menuIsVisible={menuIsVisible}
                    setMenuIsVisible={setMenuIsVisible}/>
                <Navbar
                    setMenuIsVisible={setMenuIsVisible}/>
                <AppRoutes/>
            </Wrapper>
        </Container>
    )
}

export default Layout;