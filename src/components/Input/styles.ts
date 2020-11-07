import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: white;
  border-radius: 3px;
  margin-bottom: 10px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: black;
  font-size: 20px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const IconRight = styled(FeatherIcon)`
  margin-left: 10px;
`;
