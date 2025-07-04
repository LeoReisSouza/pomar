import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import InputPadrao from '../components/InputPadrao';
import BotaoPrimario from '../components/BotaoPrimario';

const AutenticacaoScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');

  const handleContinuar = () => {
    if (nome.trim()) {
      navigation.replace('MenuPrincipal');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.conteudo}>
        <Cabecalho titulo="Pomar" />
        
        <View style={styles.formulario}>
          <InputPadrao
            label="Digite seu nome:"
            value={nome}
            onChangeText={setNome}
            placeholder="Seu nome"
          />
          
          <BotaoPrimario
            titulo="Continuar"
            onPress={handleContinuar}
            desabilitado={!nome.trim()}
            estilo={styles.botao}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  conteudo: {
    flex: 1,
  },
  formulario: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  botao: {
    marginTop: 20,
  },
});

export default AutenticacaoScreen;