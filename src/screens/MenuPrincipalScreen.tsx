import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import CardProduto from '../components/CardProduto';

const produtos = [
  { id: '1', nome: 'Brócolis', preco: 8.50, imagemUrl: 'https://phygital-files.mercafacil.com/barao-bucket/uploads/produto/brocolis_ninja_un_7f45b679-2fe4-446a-b92d-658a69b40234.png' },
  { id: '2', nome: 'Couve', preco: 4.00, imagemUrl: 'https://www.varanda.com.br/media/tmp/webp/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/c/o/couve-manteiga2.webp' },
  { id: '3', nome: 'Manga', preco: 4.00, imagemUrl: 'https://abrafrutas.org/wp-content/uploads/2023/04/destaque-manga.webp' },
  { id: '4', nome: 'Melão', preco: 8.00, imagemUrl: 'https://www.redesuperbom.com.br/media/produtos/536x536/18005_barcelos_frutas_melao-amarelo-kg-granel.png' },
  { id: '5', nome: 'Limão', preco: 1.00, imagemUrl: 'https://acdn-us.mitiendanube.com/stores/002/296/660/products/limao1-ec0330346f306e615a16606772664916-1024-1024.png' },
  { id: '6', nome: 'Melancia', preco: 4.00, imagemUrl: 'https://cdn.awsli.com.br/2500x2500/681/681419/produto/314521622/melancia-2-n5w8wts5yx.jpeg' },
];

const MenuPrincipalScreen = ({ navigation }) => {
  const handleProdutoPress = (produto) => {
    navigation.navigate('DetalhesProduto', { produto });
  };

  const handleCarrinhoPress = () => {
    navigation.navigate('Carrinho');
  };

  return (
    <View style={styles.container}>
      
      {/* Cabeçalho com botão do carrinho */}
      <View style={styles.topo}>
        <Text style={styles.titulo}>Oiê, Leo! 🍉</Text>
        <TouchableOpacity onPress={handleCarrinhoPress} style={styles.botaoCarrinhoTopo}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/107/107831.png' }}
            style={styles.iconeCarrinho}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.conteudo}>
        <Text style={styles.secaoTitulo}>Itens na promoção</Text>

        <FlatList
          horizontal
          data={produtos}
          renderItem={({ item }) => (
            <CardProduto
              id={item.id}
              nome={item.nome}
              preco={item.preco}
              imagemUrl={item.imagemUrl}
              onPress={() => handleProdutoPress(item)}
              emDestaque={true}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listaProdutos}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.secaoTitulo}>Todos os produtos</Text>

        <View style={styles.gridProdutos}>
          {produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              imagemUrl={produto.imagemUrl}
              onPress={() => handleProdutoPress(produto)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topo: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#778D72',
  },
  botaoCarrinhoTopo: {
    padding: 8,
  },
  iconeCarrinho: {
    width: 28,
    height: 28,
    tintColor: '#778D72',
  },
  conteudo: {
    flex: 1,
    padding: 16,
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#778D72',
  },
  listaProdutos: {
    paddingVertical: 8,
  },
  gridProdutos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default MenuPrincipalScreen;
