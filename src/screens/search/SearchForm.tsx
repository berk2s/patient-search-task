import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Dropdown, Input} from '../../components';
import {paramsData, searchCasesData} from '../../data';

export const SearchForm = () => {
  function paramsDropdownChange(selectedParams: any) {
    console.log(selectedParams);
  }

  function casesDropdownChange(selectedParams: any) {
    console.log(selectedParams);
  }

  function handleSearchSubmit() {}

  return (
    <View style={styles.searchFormWrapper}>
      <View style={styles.paramsArea}>
        <View style={styles.paramsDropdownArea}>
          <Dropdown
            onChange={paramsDropdownChange}
            placeholder={'Select parameter(s)'}
            items={paramsData}
            multiple={true}
          />
        </View>

        <View style={styles.searchCasesArea}>
          <Dropdown
            onChange={casesDropdownChange}
            placeholder={'Select a search case'}
            items={searchCasesData}
            multiple={false}
          />
        </View>

        <View style={styles.inputArea}>
          <Input
            placeholder={'Type something (E.g. Anita)'}
            placeholderColor={'#595260'}
          />
        </View>

        <View style={styles.buttonArea}>
          <Button onPress={handleSearchSubmit} text={'Search'} />
        </View>
      </View>
      <View style={styles.keyArea}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonArea: {
    marginTop: 15,
  },
  searchCasesArea: {
    marginTop: 15,
    zIndex: 9999,
  },
  paramsDropdownArea: {
    zIndex: 99999,
  },

  inputArea: {
    marginTop: 15,
  },
  keyArea: {},
  paramsArea: {},
  searchFormWrapper: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
});
