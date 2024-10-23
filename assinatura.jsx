import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
`;

export default function AddSubscription() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [renewal, setRenewal] = useState('');

  const handleAdd = () => {
  };

  return (
    <Container>
      <TextInput
        placeholder="Nome do Serviço"
        value={name}
        onChangeText={setName}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Valor (R$)"
        value={price}
        onChangeText={setPrice}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <TextInput
        placeholder="Data de Renovação"
        value={renewal}
        onChangeText={setRenewal}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Adicionar Assinatura" onPress={handleAdd} />
    </Container>
  );
}
