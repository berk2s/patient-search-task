import React from 'react';
import {Text, View} from 'react-native';

export const Header = ({title, desc}: {title: string; desc: string}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{desc}</Text>
    </View>
  );
};
