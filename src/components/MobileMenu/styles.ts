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

    color: var(--black);
    background: var(--primary);
    
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
    width: 80%;
    padding: 10px 16px;

    text-align: center;
    text-decoration: none;
    
    border-radius: 15px;

    color: var(--black);

    &:hover {
        font-weight: 500;

        background: var(--gray-300);

        transform: scale(1.1);
        transition: 200ms ease-in-out;
    }
`;
