import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const SubscriptionItem = styled.View`
  padding: 15px;
  margin-vertical: 10px;
  background-color: #f8f8f8;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const data = [
  { id: '1', name: 'Netflix', renewal: '10/11/2024', price: 'R$ 45,90' },
  { id: '2', name: 'Spotify', renewal: '15/11/2024', price: 'R$ 19,90' }
];

export default function ManageSubscriptions() {
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SubscriptionItem>
            <Text>{item.name}</Text>
            <Button title="Editar" onPress={() => {}} />
          </SubscriptionItem>
        )}
      />
    </Container>
  );
}
