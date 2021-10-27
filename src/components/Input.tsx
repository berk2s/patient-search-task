import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface InputProps {
  onChangeText(s: string): void;
  placeholder: string;
  placeholderColor: string;
}

export const Input = (props: InputProps) => {
  return (
    <View style={styles.inputAreaWrapper}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderColor}
        onChangeText={props.onChangeText}
        autoCapitalize={'none'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 44,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#B2B1B9',
    paddingHorizontal: 12,
  },
  inputAreaWrapper: {},
});
