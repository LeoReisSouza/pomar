import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

interface ModalPagamentoProps {
  visivel: boolean;
  onClose: () => void;
  onPagamentoCartao: () => void;
  onPagamentoEntrega: () => void;
}

const ModalPagamento: React.FC<ModalPagamentoProps> = ({
  visivel,
  onClose,
  onPagamentoCartao,
  onPagamentoEntrega,
}) => {
  return (
    <Modal visible={visivel} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.titulo}>Forma de Pagamento</Text>
          
          <TouchableOpacity style={styles.opcao} onPress={onPagamentoCartao}>
            <Text style={styles.opcaoTexto}>Pagar com cartão</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.opcao} onPress={onPagamentoEntrega}>
            <Text style={styles.opcaoTexto}>Pagar na entrega</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.botaoCancelar} onPress={onClose}>
            <Text style={styles.botaoCancelarTexto}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 8,
    padding: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#778D72',
  },
  opcao: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  opcaoTexto: {
    fontSize: 16,
    textAlign: 'center',
  },
  botaoCancelar: {
    marginTop: 20,
    padding: 12,
  },
  botaoCancelarTexto: {
    color: '#FF3B30',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ModalPagamento;