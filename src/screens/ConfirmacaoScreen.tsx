import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import BotaoPrimario from '../components/BotaoPrimario';

const ConfirmacaoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Cabecalho titulo="Pedido feito!" mostraVoltar={false} />
      
      <View style={styles.conteudo}>
        <Image source={require('../assets/images/snack-icon.png')} style={styles.imagem} />
        <Text style={styles.mensagem}>Logo logo você receberá seu pedido!</Text>
        <Text style={styles.detalhe}>Ligaremos quando chegar.</Text>
        
        <TouchableOpacity style={styles.botaoRecibo}>
          <Text style={styles.botaoReciboTexto}>Recibo por e-mail</Text>
        </TouchableOpacity>
        
        <BotaoPrimario 
          titulo="Voltar ao menu" 
          onPress={() => navigation.replace('MenuPrincipal')} 
          estilo={styles.botao}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  imagem: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  mensagem: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#778D72',
  },
  detalhe: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#666',
  },
  botaoRecibo: {
    marginBottom: 30,
  },
  botaoReciboTexto: {
    color: '#778D72',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  botao: {
    width: '100%',
  },
});

export default ConfirmacaoScreen;