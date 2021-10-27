import React from 'react';
import {View} from 'react-native';
import {Header} from '../../components';
import {SearchForm} from './SearchForm';
import {SearchResults} from './SearchResults';
import styles from './styles';

export const SearchScreen = () => {
  return (
    <View style={styles.pageWrapper}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerArea}>
          <Header
            title={'Welcome to patient search'}
            desc={'You can search patients by parameters and see details!'}
          />
        </View>

        <View style={styles.formArea}>
          <SearchForm />
        </View>
      </View>
    </View>
  );
};
