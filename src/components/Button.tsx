import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  onPress(): void;
  text: any;
}

export const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7952B3',
    width: '100%',
    height: 45,
    borderRadius: 8,
  },
});
