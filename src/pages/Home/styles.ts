import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 0 20px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const ImageHome = styled.img`
    src: url(${props => props.src});
    width: 40%;

    @media (max-width: 900px) {
        width: 60%;
    }

    @media (max-width: 500px) {
        width: 80%;
    }
`;

export const GroupItems = styled.div`
    width: 40%;
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 900px) {
        width: 100%;

        justify-content: space-evenly;
    }
`;

export const Title = styled.h1`
    padding: 10px;
`;

export const GroupButton = styled.div`
    height: 60%;
    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 900px) {
        width: 100%;
        align-items: center;
    }

    @media (max-width: 500px) {
        justify-content: space-around;
    }
`;