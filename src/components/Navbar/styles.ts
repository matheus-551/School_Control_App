import styled from 'styled-components';

import { MenuOutline } from '@styled-icons/evaicons-outline/MenuOutline';

export const Container = styled.div`
    width: 100%;
    padding: 6px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #80ABFE;
`;

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 900px) {
        h1 { 
            font-size: 24px;
        }
    }
`;

export const Logo = styled.img`
    src: url(${props => props.src});
    max-width: 80px;
`;

export const NavMenu = styled.div`
    width: 30%;
    padding: 8px;

    display: flex;
    justify-content: space-around;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const NavItem = styled.a`
    padding: 4px;
    flex-shrink: 0;

    font-weight: 600;
    text-decoration: none;
    color: #000;
    
    &:hover {
        cursor: pointer;
        font-weight: 500;
        transform: scale(1.1);
        transition: 200ms ease-in-out;
    }
`;


export const MenuButton = styled(MenuOutline)`
    width: 45px;
    
    cursor: pointer;
    display: none;

    @media (max-width: 900px) {
        display: block;
    }
`;