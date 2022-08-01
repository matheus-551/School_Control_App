import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 4px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const GroupItems = styled.div`
    width: 100%;
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.div`
    width: 300px;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 2%;

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
        background: #292427;
    }
`;

export const EditButton = styled.span`
    
    > a {
        margin-right: 2px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        color: #000;
    }
`;