import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 0 20px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const ImageHome = styled.img`
    src: url(${props => props.src});
    width: 40%;
`;

export const GroupItems = styled.div`
    width: 40%;
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
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
`;