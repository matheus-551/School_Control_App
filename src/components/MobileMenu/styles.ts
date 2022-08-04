import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    
    display: none;
    justify-content: center;
    align-items: center;

    color: #111;
    background: #fff;
    
    opacity: 1;

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    ${(props: {isVisible: boolean}) => props.isVisible && css`
        display: block;
        overflow: visible;
    `}
`;

export const Nav = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 2rem;
`;

export const NavItem = styled.a`
    text-decoration: none;
    color: #111;

    &:hover {
        font-weight: 500;
        transform: scale(1.1);
        transition: 200ms ease-in-out;
    }
`;
