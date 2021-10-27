import {ActionCreator} from 'redux';
import {navigate, searchService} from '../../services';
import caseConverter from '../../utils/case-converter';
import {
  CLEAR_SEARCH,
  END_SEARCH,
  SearchActionTypes,
  SearchCaseAsteriks,
  SearchItem,
  SearchParams,
  SearchResult,
  START_SEARCH,
} from '../types';

export const startSearching: ActionCreator<SearchActionTypes> = (
  key: string,
  params: Array<SearchParams>,
) => {
  return {
    type: START_SEARCH,
    payload: {
      searchKey: key,
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
  searchKey: string,
  searchParams: Array<SearchParams>,
  searchCase: SearchCaseAsteriks,
) {
  return (dispatch: any) => {
    dispatch(startSearching(searchKey, searchParams));

    let params = searchParams.reduce((prev, curr, index) => {
      return {
        ...prev,
        [curr]: caseConverter(searchCase, searchKey),
      };
    }, {});

    return searchService
      .search(params)
      .then((response: SearchResult) => {
        console.log(response);

        dispatch(endSearching(response));
        return response?.entry;
      })
      .then((items?: SearchItem[]) => {
        console.log(JSON.stringify(items));
      })
      .then(() => {
        navigate('Results', null);
      });
  };
}

export const clearSearch: ActionCreator<SearchActionTypes> = () => {
  return {
    type: CLEAR_SEARCH,
  };
};
