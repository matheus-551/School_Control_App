import React from 'react';

import homeImage from '../../assets/homeImage.png';

import {
  Container,
  ImageHome,
  GroupItems,
  Title,
  GroupButton,
  Button,
} from './styles';

import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
      <Container>
        <ImageHome src={homeImage}/>
        <GroupItems>
          <Title>Controle Escolar</Title>

          <GroupButton>
            <Button><Link to="/student">ALUNO</Link></Button>
            <Button><Link to="/teacher">PROFESSOR</Link></Button>
            <Button><Link to="/classroom">SALA DE AULA</Link></Button>
          </GroupButton>
        </GroupItems>
      </Container>
    )
}

export default Home;