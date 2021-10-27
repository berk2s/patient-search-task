import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Header} from '../../components';
import {search} from '../../redux/actions';
import styles from './styles';

export const SearchScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(search(['*va'], ['family']));
  }, []);

  return (
    <SafeAreaView style={styles.pageWrapper}>
      <Header
        title={'Welcome to patient search'}
        desc={'You can search patients by parameters and see details!'}
      />
    </SafeAreaView>
  );
};
