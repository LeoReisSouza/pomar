import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface BotaoPrimarioProps {
  titulo: string;
  onPress: () => void;
  desabilitado?: boolean;
  estilo?: ViewStyle;
}

const BotaoPrimario: React.FC<BotaoPrimarioProps> = ({ titulo, onPress, desabilitado = false, estilo }) => {
  return (
    <TouchableOpacity
      style={[styles.botao, estilo, desabilitado && styles.botaoDesabilitado]}
      onPress={onPress}
      disabled={desabilitado}
    >
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#778D72',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoDesabilitado: {
    backgroundColor: '#CCCCCC',
  },
  texto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BotaoPrimario;