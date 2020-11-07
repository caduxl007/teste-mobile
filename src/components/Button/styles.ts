import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ba722b;
  border-radius: 3px;
  margin-top: 10px;

  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  text-transform: uppercase;
  font-size: 20px;
  color: white;
`;
