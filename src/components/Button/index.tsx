import React from 'react';

import { Container } from './styles';

import { Link } from 'react-router-dom';

interface Props {
    Title: string,
    Href: string
}

const Button: React.FC<Props>= ({Title, Href}) => {
    return (
        <Container>
            <Link to={Href}>{Title}</Link>
        </Container>
    )
}

export default Button;