import React, {useState} from 'react';
import {ActivityIndicator, Alert, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Dropdown, Input} from '../../components';
import {paramsData, searchCasesData} from '../../data';
import {search} from '../../redux/actions';
import {RootState} from '../../redux/reducers';
import {SearchState} from '../../redux/types';

export const SearchForm = () => {
  const dispatch = useDispatch();

  const {isSearching}: {isSearching: boolean} = useSelector(
    (state: RootState) => state.search,
  );

  const [selectedParams, setSelectedParams] = useState<any>(null);
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [searchKey, setSearchKey] = useState<string | null>(null);

  function paramsDropdownChange(_selectedParams: any) {
    const searchParams = _selectedParams.map((p: any) => p.value);

    setSelectedParams(searchParams);
  }

  function casesDropdownChange(_selectedCase: any) {
    const searchCase = _selectedCase.map((c: any) => c.value);

    setSelectedCase(searchCase);
  }

  function handleSearchSubmit() {
    if (!selectedParams || !selectedCase || !searchKey) {
      Alert.alert('Some fields are empty');
      return;
    }

    dispatch(search(searchKey, selectedParams, selectedCase));
  }

  function onChangeSearchKeyInput(key: string) {
    setSearchKey(key.trim() === '' ? null : key);
  }

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
            onChangeText={onChangeSearchKeyInput}
          />
        </View>

        <View style={styles.buttonArea}>
          <Button
            onPress={handleSearchSubmit}
            text={isSearching ? <ActivityIndicator color={'#fff'} /> : 'Search'}
          />
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
    display: 'flex',
    flex: 1,
  },
});
