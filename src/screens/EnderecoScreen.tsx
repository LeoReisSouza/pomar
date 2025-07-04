import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import InputPadrao from '../components/InputPadrao';
import BotaoPrimario from '../components/BotaoPrimario';

const EnderecoScreen = ({ navigation, route }) => {
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleContinuar = () => {
    navigation.navigate('PagamentoCartao', {
      ...route.params,
      endereco: { endereco, complemento, cep, cidade, estado, telefone }
    });
  };

  return (
    <View style={styles.container}>
      <Cabecalho 
        titulo="Endereço de entrega" 
        mostraVoltar 
        onPressVoltar={() => navigation.goBack()} 
      />
      
      <ScrollView style={styles.conteudo}>
        <InputPadrao
          label="Endereço"
          value={endereco}
          onChangeText={setEndereco}
          placeholder="Rua, Avenida, etc."
        />
        
        <InputPadrao
          label="Complemento"
          value={complemento}
          onChangeText={setComplemento}
          placeholder="Apartamento, bloco, etc."
        />
        
        <View style={styles.row}>
          <View style={[styles.col, { marginRight: 8 }]}>
            <InputPadrao
              label="CEP"
              value={cep}
              onChangeText={setCep}
              placeholder="00000-000"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.col}>
            <InputPadrao
              label="Cidade"
              value={cidade}
              onChangeText={setCidade}
              placeholder="Sua cidade"
            />
          </View>
        </View>
        
        <InputPadrao
          label="Estado"
          value={estado}
          onChangeText={setEstado}
          placeholder="UF"
        />
        
        <InputPadrao
          label="Telefone"
          value={telefone}
          onChangeText={setTelefone}
          placeholder="(00) 00000-0000"
          keyboardType="phone-pad"
        />
      </ScrollView>
      
      <View style={styles.rodape}>
        <BotaoPrimario 
          titulo="Continuar para pagamento" 
          onPress={handleContinuar}
          desabilitado={!endereco || !cep || !cidade || !estado || !telefone}
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
    padding: 16,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
  },
  rodape: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
});

export default EnderecoScreen;