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

const Home: React.FC = () => {
    return (
      <Container>
        <ImageHome src={homeImage}/>
        <GroupItems>
          <Title>Controle Escolar</Title>

          <GroupButton>
            <Button>ALUNO</Button>
            <Button>PROFESSOR</Button>
            <Button>SALA</Button>
          </GroupButton>
        </GroupItems>
      </Container>
    )
}

export default Home;