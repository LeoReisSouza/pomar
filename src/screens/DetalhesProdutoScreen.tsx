import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import BotaoPrimario from '../components/BotaoPrimario';

const DetalhesProdutoScreen = ({ navigation, route }) => {
  const { produto } = route.params;
  const [quantidade, setQuantidade] = useState(1);

  const handleAdicionarCarrinho = () => {
    // Lógica para adicionar ao carrinho
    navigation.navigate('MenuPrincipal');
  };

  return (
    <View style={styles.container}>
      <Cabecalho 
        titulo={produto.nome} 
        mostraVoltar 
        onPressVoltar={() => navigation.goBack()} 
      />
      
      <ScrollView style={styles.conteudo}>
        <Image source={{ uri: produto.imagemUrl }} style={styles.imagem} />
        
        <View style={styles.infoContainer}>
          <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>
          
          <View style={styles.quantidadeContainer}>
            <Text style={styles.quantidadeLabel}>Quantidade:</Text>
            <View style={styles.quantidadeControles}>
              <Text 
                style={[styles.quantidadeBotao, quantidade <= 1 && styles.quantidadeBotaoDesabilitado]}
                onPress={() => quantidade > 1 && setQuantidade(quantidade - 1)}
              >
                -
              </Text>
              <Text style={styles.quantidade}>{quantidade}</Text>
              <Text 
                style={styles.quantidadeBotao}
                onPress={() => setQuantidade(quantidade + 1)}
              >
                +
              </Text>
            </View>
          </View>
          
          <Text style={styles.descricaoTitulo}>Descrição</Text>
          <Text style={styles.descricao}>
            Experimente a deliciosa {produto.nome}, ideal para uma alimentação mais balanceada e nutritiva.
          </Text>
          
          <Text style={styles.horario}>
            Segunda à Sábado, das 08h às 21h. Exceto feriados.
          </Text>
        </View>
      </ScrollView>
      
      <View style={styles.rodape}>
        <BotaoPrimario 
          titulo="Adicionar ao carrinho" 
          onPress={handleAdicionarCarrinho} 
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
  },
  imagem: {
    width: '100%',
    height: 250,
  },
  infoContainer: {
    padding: 20,
  },
  preco: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#778D72',
    marginBottom: 20,
  },
  quantidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantidadeLabel: {
    fontSize: 16,
    marginRight: 16,
  },
  quantidadeControles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantidadeBotao: {
    fontSize: 20,
    paddingHorizontal: 12,
    color: '#778D72',
  },
  quantidadeBotaoDesabilitado: {
    color: '#CCCCCC',
  },
  quantidade: {
    fontSize: 18,
    marginHorizontal: 8,
  },
  descricaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#778D72',
  },
  descricao: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  horario: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  rodape: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
});

export default DetalhesProdutoScreen;