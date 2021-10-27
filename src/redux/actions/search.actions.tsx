import {ActionCreator} from 'redux';
import {searchService} from '../../services';
import {
  CLEAR_SEARCH,
  END_SEARCH,
  SearchActionTypes,
  SearchItem,
  SearchParams,
  SearchResult,
  START_SEARCH,
} from '../types';

export const startSearching: ActionCreator<SearchActionTypes> = (
  keys: string[],
  params: Array<SearchParams>,
) => {
  return {
    type: START_SEARCH,
    payload: {
      searchKeys: keys,
      searchParams: params,
    },
  };
};

export const endSearching: ActionCreator<SearchActionTypes> = (
  result: SearchResult,
) => {
  return {
    type: END_SEARCH,
    payload: result,
  };
};

export function search(
  searchKeys: string[],
  searchParams: Array<SearchParams>,
) {
  return (dispatch: any) => {
    dispatch(startSearching(searchKeys, searchParams));

    let params = searchParams.reduce((prev, curr, index) => {
      return {
        ...prev,
        [curr]: searchKeys[index],
      };
    }, {});

    return searchService
      .search(params)
      .then((response: SearchResult) => {
        dispatch(endSearching(response));
        return response?.entry;
      })
      .then((items?: SearchItem[]) => {
        console.log(JSON.stringify(items));
      });
  };
}

export const clearSearch: ActionCreator<SearchActionTypes> = () => {
  return {
    type: CLEAR_SEARCH,
  };
};
