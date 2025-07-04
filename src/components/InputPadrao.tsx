import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';

interface InputPadraoProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  erro?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

const InputPadrao: React.FC<InputPadraoProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  erro,
  keyboardType = 'default',
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, erro ? styles.inputErro : null]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {erro && <Text style={styles.erro}>{erro}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputErro: {
    borderColor: '#FF3B30',
  },
  erro: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
  },
});

export default InputPadrao;