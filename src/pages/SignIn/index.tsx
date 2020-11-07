import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, ForgotButton, TextForgot } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input type="password" name="password" icon="lock" placeholder="Senha" />

      <Button onPress={() => navigation.navigate('Dashboard')}>
        Autenticar
      </Button>

      <ForgotButton>
        <TextForgot>Esqueci a senha</TextForgot>
      </ForgotButton>
    </Container>
  );
};

export default SignIn;
