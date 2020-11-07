import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Residencia,
  BorderLeft,
  Content,
  Titulo,
  TextTitulo,
  TextLocal,
  FooterInfo,
  TextIncidentes,
  InfoResidencia,
  ImageInfo,
  InfoText,
  TituloInfo,
  SubTituloInfo,
} from './styles';

interface Repository {
  full_name: string;
  description?: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Residencias: React.FC<Repository> = ({
  full_name,
  owner,
}: Repository) => {
  const [isVisibleDescription, setIsVisibleDescription] = useState(false);

  return (
    <Container>
      <Residencia
        onPress={() => setIsVisibleDescription(!isVisibleDescription)}
      >
        <BorderLeft />
        <Content>
          <Titulo>
            <TextTitulo>{full_name}</TextTitulo>
            <Icon name="alert-triangle" size={20} color="red" />
          </Titulo>
          <TextLocal>Baldrame {'>'} BLOCO 01 - 2º pavimento</TextLocal>
          <FooterInfo>
            <TextIncidentes>6 incidentes</TextIncidentes>
            <TextIncidentes>Entrega: 22/03/2020</TextIncidentes>
          </FooterInfo>
        </Content>
      </Residencia>
      {isVisibleDescription && (
        <InfoResidencia>
          <ImageInfo source={{ uri: owner.avatar_url }} />
          <InfoText>
            <TituloInfo>{full_name}</TituloInfo>
            <SubTituloInfo>{owner.login}</SubTituloInfo>
          </InfoText>
        </InfoResidencia>
      )}
    </Container>
  );
};

export default Residencias;
