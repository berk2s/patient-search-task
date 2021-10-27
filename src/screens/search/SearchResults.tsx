import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import {SearchState} from '../../redux/types';

export const SearchResults = () => {
  const search: SearchState = useSelector((state: RootState) => state.search);

  return (
    <View>
      <Text>{search.results ? search.results.total : 'yok'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
