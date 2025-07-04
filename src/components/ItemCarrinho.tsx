import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ItemCarrinhoProps {
  id: string;
  nome: string;
  precoUnitario: number;
  quantidade: number;
  imagemUrl: string;
  onRemover: () => void;
  onQuantidadeMudou: (novaQuantidade: number) => void;
}

const ItemCarrinho: React.FC<ItemCarrinhoProps> = ({
  nome,
  precoUnitario,
  quantidade,
  imagemUrl,
  onRemover,
  onQuantidadeMudou,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imagemUrl }} style={styles.imagem} />
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.preco}>R$ {precoUnitario.toFixed(2)}</Text>
        <View style={styles.quantidadeContainer}>
          <TouchableOpacity 
            onPress={() => onQuantidadeMudou(quantidade - 1)}
            disabled={quantidade <= 1}
          >
            <Ionicons name="remove-circle-outline" size={24} color={quantidade <= 1 ? '#CCCCCC' : '#778D72'} />
          </TouchableOpacity>
          <Text style={styles.quantidade}>{quantidade}</Text>
          <TouchableOpacity onPress={() => onQuantidadeMudou(quantidade + 1)}>
            <Ionicons name="add-circle-outline" size={24} color="#778D72" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={onRemover} style={styles.remover}>
        <Ionicons name="trash-outline" size={24} color="#FF3B30" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    alignItems: 'center',
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  preco: {
    fontSize: 14,
    color: '#778D72',
    marginBottom: 8,
  },
  quantidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantidade: {
    marginHorizontal: 12,
    fontSize: 16,
  },
  remover: {
    marginLeft: 16,
  },
});

export default ItemCarrinho;