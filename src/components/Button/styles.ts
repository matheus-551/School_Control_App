import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 4%;

    background: var(--dark-gray-100);

    > a {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;

        color: var(--white);
    }

    &:hover {
        cursor: pointer;
        color: var(--dark-gray-200);
    }

    @media (max-width: 500px) {
        width: 100%;
        height: 10vh;

        border-radius: 2%;
    }
`;