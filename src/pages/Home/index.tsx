import React from 'react';

import homeImage from '../../assets/homeImage.png';

import {
  Container,
  ImageHome,
  GroupItems,
  Title,
  GroupButton,
} from './styles';

import Button from '../../components/Button';

const Home: React.FC = () => {
    return (
      <Container>
        <ImageHome src={homeImage}/>
        <GroupItems>
          <Title>CONTROLE ESCOLAR</Title>

          <GroupButton>
            <Button Title="ALUNO" Href="/student"/>
            <Button Title="PROFESSOR" Href="/teacher"/>
            <Button Title="SALA DE AULA" Href="/classroom"/>
          </GroupButton>
        </GroupItems>
      </Container>
    )
}

export default Home;