import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import BotaoPrimario from '../components/BotaoPrimario';
import ItemCarrinho from '../components/ItemCarrinho';
import ModalPagamento from '../components/ModalPagamento';
import InputPadrao from '../components/InputPadrao';

const itensCarrinho = [
  { id: '1', nome: 'Coentro', precoUnitario: 5.00, quantidade: 1, imagemUrl: 'https://www.galaxcommerce.com.br/sistema/upload/4188/produtos/coentro-moi_2024-08-27_13-10-51_0_443.png' },
  { id: '2', nome: 'Maracuja', precoUnitario: 4.00, quantidade: 1, imagemUrl: 'https://www.gebon.com.br/image/media/_00200/255/picole-gefrutti-maracuja.png' },
  { id: '3', nome: 'Limão', precoUnitario: 1.00, quantidade: 3, imagemUrl: 'https://acdn-us.mitiendanube.com/stores/002/296/660/products/limao1-ec0330346f306e615a16606772664916-1024-1024.png' },
];

const CarrinhoScreen = ({ navigation }) => {
  const [modalPagamentoVisivel, setModalPagamentoVisivel] = useState(false);
  const [pagamentoComCartao, setPagamentoComCartao] = useState(false);
  const [endereco, setEndereco] = useState('Av. Salgado (filho, 233)');
  const [telefone, setTelefone] = useState('09090605708');
  const [nomeCartao, setNomeCartao] = useState('Leonardo Reis');
  const [numeroCartao, setNumeroCartao] = useState('1234-5678-9012-1314');
  const [validadeCartao, setValidadeCartao] = useState('10/30');
  const [horaEntrega, setHoraEntrega] = useState('12:30');

  const calcularTotal = () => {
    return itensCarrinho.reduce((total, item) => total + (item.precoUnitario * item.quantidade), 0);
  };

  const handleRemoverItem = (id) => {
    // Lógica para remover item do carrinho
  };

  const handleQuantidadeMudou = (id, novaQuantidade) => {
    // Lógica para atualizar quantidade
  };

  const handleFinalizarCompra = () => {
    setModalPagamentoVisivel(true);
  };

  const handlePagamentoCartao = () => {
    setPagamentoComCartao(true);
    setModalPagamentoVisivel(false);
  };

  const handlePagamentoEntrega = () => {
    setPagamentoComCartao(false);
    setModalPagamentoVisivel(false);
  };

  const handleConfirmarPedido = () => {
    navigation.navigate('Confirmacao');
  };

  return (
    <View style={styles.container}>
      <Cabecalho 
        titulo="Meu carrinho" 
        mostraVoltar 
        onPressVoltar={() => navigation.goBack()} 
      />
      
      <ScrollView style={styles.conteudo}>
        {itensCarrinho.map((item) => (
          <ItemCarrinho
            key={item.id}
            id={item.id}
            nome={item.nome}
            precoUnitario={item.precoUnitario}
            quantidade={item.quantidade}
            imagemUrl={item.imagemUrl}
            onRemover={() => handleRemoverItem(item.id)}
            onQuantidadeMudou={(novaQuantidade) => handleQuantidadeMudou(item.id, novaQuantidade)}
          />
        ))}
        
        <View style={styles.secaoEndereco}>
          <Text style={styles.secaoTitulo}>Endereço de entrega</Text>
          <InputPadrao
            label="Endereço"
            value={endereco}
            onChangeText={setEndereco}
          />
          <InputPadrao
            label="Telefone"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />
        </View>
        
        {pagamentoComCartao && (
          <View style={styles.secaoPagamento}>
            <Text style={styles.secaoTitulo}>Pagamento com cartão</Text>
            <InputPadrao
              label="Nome completo"
              value={nomeCartao}
              onChangeText={setNomeCartao}
            />
            <InputPadrao
              label="Número do cartão"
              value={numeroCartao}
              onChangeText={setNumeroCartao}
              keyboardType="numeric"
            />
            <View style={styles.row}>
              <View style={[styles.col, { marginRight: 8 }]}>
                <InputPadrao
                  label="Validade"
                  value={validadeCartao}
                  onChangeText={setValidadeCartao}
                  placeholder="MM/AA"
                />
              </View>
              <View style={styles.col}>
                <InputPadrao
                  label="Hora da entrega"
                  value={horaEntrega}
                  onChangeText={setHoraEntrega}
                  placeholder="HH:MM"
                />
              </View>
            </View>
          </View>
        )}
        
        <View style={styles.totalContainer}>
          <Text style={styles.totalTexto}>Total:</Text>
          <Text style={styles.totalValor}>R$ {calcularTotal().toFixed(2)}</Text>
        </View>
      </ScrollView>
      
      <View style={styles.rodape}>
        <BotaoPrimario 
          titulo={pagamentoComCartao ? "Confirmar pedido" : "Finalizar compra"} 
          onPress={pagamentoComCartao ? handleConfirmarPedido : handleFinalizarCompra} 
        />
      </View>
      
      <ModalPagamento
        visivel={modalPagamentoVisivel}
        onClose={() => setModalPagamentoVisivel(false)}
        onPagamentoCartao={handlePagamentoCartao}
        onPagamentoEntrega={handlePagamentoEntrega}
      />
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
  secaoEndereco: {
    marginTop: 20,
  },
  secaoPagamento: {
    marginTop: 20,
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#778D72',
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  totalTexto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#778D72',
  },
  rodape: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
});

export default CarrinhoScreen;