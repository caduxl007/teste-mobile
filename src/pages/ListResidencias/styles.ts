import styled from 'styled-components/native';
import IconFeather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: 40px 25px 25px 25px;
  background: #72afb5;
  height: 80px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(IconFeather)`
  margin-left: 10px;
`;
