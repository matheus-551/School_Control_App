import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    padding: 6px;

    display: flex;
    justify-content: space-between;
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
    width: 35%;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        width: 100%;
        
        display: flex;
        justify-content: space-evenly;
        
        list-style-type: none;
        
    }

    ul li:hover {
        cursor: pointer;
        
        transform: scale(1.1);
        transition: 200ms ease-out;
    }

    @media (max-width: 620px) {
        width: 100%;
    }

    @media (max-width: 495px) {
        display: none;
    }
`;