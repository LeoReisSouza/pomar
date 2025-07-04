import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import AutenticacaoScreen from '../screens/AutenticacaoScreen';
import MenuPrincipalScreen from '../screens/MenuPrincipalScreen';
import DetalhesProdutoScreen from '../screens/DetalhesProdutoScreen';
import CarrinhoScreen from '../screens/CarrinhoScreen';
import EnderecoScreen from '../screens/EnderecoScreen';
import PagamentoCartaoScreen from '../screens/PagamentoCartaoScreen';
import ConfirmacaoScreen from '../screens/ConfirmacaoScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Autenticacao" component={AutenticacaoScreen} />
      <Stack.Screen name="Menu" component={MenuPrincipalScreen} />
      <Stack.Screen name="DetalhesProduto" component={DetalhesProdutoScreen} />
      <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
      <Stack.Screen name="Endereco" component={EnderecoScreen} />
      <Stack.Screen name="PagamentoCartao" component={PagamentoCartaoScreen} />
      <Stack.Screen name="Confirmacao" component={ConfirmacaoScreen} />
    </Stack.Navigator>
  );
}