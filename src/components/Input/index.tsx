import React, { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon, IconRight } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ name, type, icon, ...rest }) => {
  const [isDisablePassword, setIsDisablePassword] = useState(false);

  return (
    <Container>
      <Icon name={icon} size={25} />

      <TextInput {...rest} />
      {type === 'password' && !isDisablePassword && (
        <IconRight
          onPress={() => setIsDisablePassword(true)}
          name="eye"
          size={25}
        />
      )}

      {type === 'password' && isDisablePassword && (
        <IconRight
          onPress={() => setIsDisablePassword(false)}
          name="eye-off"
          size={25}
        />
      )}
    </Container>
  );
};

export default Input;
