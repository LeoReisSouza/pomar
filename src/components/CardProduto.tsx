import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

interface CardProdutoProps {
  id: string;
  nome: string;
  preco: number;
  imagemUrl: string;
  onPress: () => void;
  emDestaque?: boolean;
}

const CardProduto: React.FC<CardProdutoProps> = ({ nome, preco, imagemUrl, onPress, emDestaque = false }) => {
  return (
    <TouchableOpacity 
      style={[styles.container, emDestaque && styles.destaque]}
      onPress={onPress}
    >
      <Image source={{ uri: imagemUrl }} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  destaque: {
    borderWidth: 2,
    borderColor: '#778D72',
  },
  imagem: {
    width: '100%',
    height: 100,
    borderRadius: 4,
    marginBottom: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  preco: {
    fontSize: 14,
    color: '#778D72',
    fontWeight: 'bold',
  },
});

export default CardProduto;