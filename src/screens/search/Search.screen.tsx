import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Header} from '../../components';
import {search} from '../../redux/actions';
import {SearchForm} from './SearchForm';
import styles from './styles';

export const SearchScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(search(['*va'], ['family']));
  }, []);

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.headerWrapper}>
        <Header
          title={'Welcome to patient search'}
          desc={'You can search patients by parameters and see details!'}
        />

        <SearchForm />
      </View>
      <View style={styles.contentWrapper}>
        <Text>Content!</Text>
      </View>
    </View>
  );
};
