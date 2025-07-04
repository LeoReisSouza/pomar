import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import InputPadrao from '../components/InputPadrao';
import BotaoPrimario from '../components/BotaoPrimario';

const PagamentoCartaoScreen = ({ navigation, route }) => {
  const [nomeCartao, setNomeCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [validade, setValidade] = useState('');
  const [cvv, setCvv] = useState('');
  const [parcelas, setParcelas] = useState('1');

  const handleFinalizarPedido = () => {
    // Validar campos antes de continuar
    navigation.navigate('Confirmacao', {
      ...route.params,
      pagamento: {
        tipo: 'cartao',
        dados: { nomeCartao, numeroCartao, validade, cvv, parcelas }
      }
    });
  };

  return (
    <View style={styles.container}>
      <Cabecalho 
        titulo="Pagamento com cartão" 
        mostraVoltar 
        onPressVoltar={() => navigation.goBack()} 
      />
      
      <ScrollView style={styles.conteudo}>
        <InputPadrao
          label="Nome no cartão"
          value={nomeCartao}
          onChangeText={setNomeCartao}
          placeholder="Como está no cartão"
        />
        
        <InputPadrao
          label="Número do cartão"
          value={numeroCartao}
          onChangeText={setNumeroCartao}
          placeholder="0000 0000 0000 0000"
          keyboardType="numeric"
        />
        
        <View style={styles.row}>
          <View style={[styles.col, { marginRight: 8 }]}>
            <InputPadrao
              label="Validade"
              value={validade}
              onChangeText={setValidade}
              placeholder="MM/AA"
            />
          </View>
          <View style={styles.col}>
            <InputPadrao
              label="CVV"
              value={cvv}
              onChangeText={setCvv}
              placeholder="000"
              keyboardType="numeric"
              secureTextEntry
            />
          </View>
        </View>
        
        <InputPadrao
          label="Parcelas"
          value={parcelas}
          onChangeText={setParcelas}
          placeholder="Número de parcelas"
          keyboardType="numeric"
        />
      </ScrollView>
      
      <View style={styles.rodape}>
        <BotaoPrimario 
          titulo="Finalizar pedido" 
          onPress={handleFinalizarPedido}
          desabilitado={!nomeCartao || !numeroCartao || !validade || !cvv || !parcelas}
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

export default PagamentoCartaoScreen;