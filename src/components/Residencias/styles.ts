import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View``;

export const Residencia = styled(RectButton)`
  width: 100%;
  height: 100px;
  background: white;
  margin-top: 20px;

  flex-direction: row;
`;

export const BorderLeft = styled.View`
  width: 6px;
  height: 100px;
  background: #72afb5;
`;

export const Content = styled.View`
  flex: 1;
  padding: 15px;
`;

export const Titulo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextTitulo = styled.Text`
  font-size: 16px;
  color: #404859;
  font-weight: bold;
`;
export const TextLocal = styled.Text`
  font-size: 14px;
  margin: 7px 0;
`;
export const FooterInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const TextIncidentes = styled.Text`
  font-size: 13px;
  color: #53607a;
`;

export const InfoResidencia = styled.View`
  padding: 30px;

  flex-direction: row;
  align-items: center;
`;
export const ImageInfo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;

  background-color: blue;
`;
export const InfoText = styled.View`
  margin-left: 15px;
`;
export const TituloInfo = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
export const SubTituloInfo = styled.Text`
  font-size: 14px;
`;
