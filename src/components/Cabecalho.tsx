import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CabecalhoProps {
  titulo: string;
  mostraVoltar?: boolean;
  onPressVoltar?: () => void;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ titulo, mostraVoltar = false, onPressVoltar }) => {
  return (
    <View style={styles.container}>
      {mostraVoltar && (
        <TouchableOpacity onPress={onPressVoltar} style={styles.botaoVoltar}>
          <Ionicons name="arrow-back" size={24} color="#778D72" />
        </TouchableOpacity>
      )}
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  botaoVoltar: {
    marginRight: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#778D72',
  },
});

export default Cabecalho;