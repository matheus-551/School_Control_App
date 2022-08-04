import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    height: auto;
    padding: 4px;
`;

export const ContainerForm = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;

    display: flex;
    flex-direction: column;

    > input[type=text], select {
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        
        display: inline-block;
        
        border: none;
        background: var(--white);

        &:focus {
            background: var(--gray-300);
            outline: none;
        }
    }

    > hr {
        border: 1px solid var(--gray-500);
        margin-top: 10px;
        margin-bottom: 25px;
    }
`;

export const HeaderForm = styled.div`
    width: 100%;
    padding: 2px;   

    @media (max-width: 900px) {
        h1 {
            font-size: 24px;
        }
    }
`;

export const Button = styled.a`
    width: 100%;
    padding: 15px 20px;
    margin: 8px 0;
    
    cursor: pointer;
    border: none;

    text-align: center;

    opacity: 0.9;
    color: var(--white);
    background: var(--green-300);

    &:hover {
        opacity: 1;
    }
`;