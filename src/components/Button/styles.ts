import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 4%;

    background: #1b181a;

    > a {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        text-decoration: none;

        color: #fff;
    }

    &:hover {
        cursor: pointer;
        color: #292427;
    }
`;