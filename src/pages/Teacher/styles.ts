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