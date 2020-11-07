import React, { useState, useCallback } from 'react';
import { ScrollView } from 'react-native';

import Input from '../../components/Input';
import Residencias from '../../components/Residencias';

import api from '../../services/api';

import { Container, Header, Icon } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const ListResidencias: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleAddRepository = useCallback(async () => {
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
    } catch (err) {
      console.log(err);
    }
  }, [newRepo, repositories]);

  return (
    <Container>
      <Header>
        <Input
          onSubmitEditing={handleAddRepository}
          name="buscar"
          value={newRepo}
          onChangeText={(text) => setNewRepo(text)}
          placeholder="Buscar"
          icon="search"
        />
        <Icon name="filter" size={25} color="white" />
      </Header>
      <ScrollView>
        {repositories.map((repository) => (
          <Residencias
            key={repository.full_name}
            full_name={repository.full_name}
            owner={repository.owner}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default ListResidencias;
