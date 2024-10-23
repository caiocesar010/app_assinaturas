import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SummaryText = styled.Text`
  font-size: 18px;
  margin: 10px;
`;

export default function Dashboard({ navigation }) {
  return (
    <Container>
      <SummaryText>Total de Assinaturas: 5</SummaryText>
      <SummaryText>Gasto Mensal: R$ 120,00</SummaryText>
      <SummaryText>Próximas Assinaturas a Renovar:</SummaryText>
      <Button title="Ver Assinaturas" onPress={() => navigation.navigate('Gerenciar')} />
    </Container>
  );
}
