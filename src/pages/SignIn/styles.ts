import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px;
`;

export const ForgotButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 15px;
`;

export const TextForgot = styled.Text`
  text-transform: uppercase;
  font-size: 17px;
  color: #fff;
`;
