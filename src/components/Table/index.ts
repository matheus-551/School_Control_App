import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;

    border-collapse: collapse;

    & td , & th {
        padding: 8px;
        border: 1px solid;
    }

    & tr:nth-child(even) {
        background-color: var(--gray-300);
    }

    & th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
    }

    & .emptyColumn {
        color: var(--white);
        background: #e32636;
    }
`;