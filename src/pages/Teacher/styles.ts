import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 4px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
        padding: 10px 6px;
    }
`;

export const GroupItems = styled.div`
    width: 100%;
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
        h1 {
            font-size: 24px;
            padding: 8px;
        }
    }

    @media (max-width: 500px) {
        flex-direction: column;
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