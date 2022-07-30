import styled from 'styled-components';

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