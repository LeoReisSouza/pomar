import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import AutenticacaoScreen from './src/screens/AutenticacaoScreen';
import MenuPrincipalScreen from './src/screens/MenuPrincipalScreen';
import DetalhesProdutoScreen from './src/screens/DetalhesProdutoScreen';
import CarrinhoScreen from './src/screens/CarrinhoScreen';
import EnderecoScreen from './src/screens/EnderecoScreen';
import PagamentoCartaoScreen from './src/screens/PagamentoCartaoScreen';
import ConfirmacaoScreen from './src/screens/ConfirmacaoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Autenticacao" component={AutenticacaoScreen} />
        <Stack.Screen name="MenuPrincipal" component={MenuPrincipalScreen} />
        <Stack.Screen name="DetalhesProduto" component={DetalhesProdutoScreen} />
        <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
        <Stack.Screen name="Endereco" component={EnderecoScreen} />
        <Stack.Screen name="PagamentoCartao" component={PagamentoCartaoScreen} />
        <Stack.Screen name="Confirmacao" component={ConfirmacaoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}