import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import {SearchItem, SearchState} from '../../redux/types';
import {RenderResult} from './RenderResult';
import styles from './styles';

export const ResultScreen = () => {
  const search: SearchState = useSelector((state: RootState) => state.search);

  const [lastIndex, setLastIndex] = useState(5);
  const [searchResults, setSearchResults] = useState(
    search.results?.entry?.slice(0, 5),
  );

  const renderListHeader = () => {
    return (
      <View style={styles.resultMetaArea}>
        <Text style={styles.resultMetaAreaText}>
          <Text style={styles.resultMetaAreaTextBold}>
            {search.results?.total}{' '}
          </Text>
          patients
        </Text>
      </View>
    );
  };

  const loadMoreResults = () => {
    const _currentIndex = lastIndex + 5;
    setSearchResults(search.results?.entry?.slice(0, _currentIndex));
    setLastIndex(_currentIndex);
  };

  return (
    <View style={styles.resultsWrapper}>
      <View style={styles.resultListArea}>
        <FlatList
          data={searchResults}
          renderItem={(item: any) => <RenderResult item={item} />}
          ListHeaderComponent={renderListHeader}
          keyExtractor={item => item.resource.id}
          initialNumToRender={5}
          onEndReachedThreshold={0.01}
          onEndReached={() => {
            loadMoreResults();
          }}
        />
      </View>
    </View>
  );
};
