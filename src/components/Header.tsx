import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export const Header = ({title, desc}: {title: string; desc: string}) => {
  return (
    <SafeAreaView style={styles.headerWrapper}>
      <View style={styles.headerContent}>
        <View style={styles.titleArea}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.descArea}>
          <Text style={styles.descText}>{desc}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  descText: {
    color: '#343A40',
    fontSize: 16,
    width: '100%',
  },
  descArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 30,
    width: '100%',
    marginTop: 5,
  },
  titleText: {
    fontSize: 26,
    color: '#000',
  },
  titleArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  headerContent: {
    display: 'flex',
    paddingHorizontal: 15,
  },
  headerWrapper: {
    display: 'flex',
    paddingBottom: 15,
  },
});
