import {CLEAR_SEARCH, END_SEARCH, SearchState, START_SEARCH} from '../types';

const initialState: SearchState = {
  searchParams: [],
  searchKeys: '',
  results: null,
  isSearching: false,
};

export function searchReducer(state: SearchState = initialState, action: any) {
  switch (action.type) {
    case START_SEARCH:
      return {
        ...state,
        searchParams: action.payload.searchParams,
        searchKey: action.payload.searchKey,
        isSearching: true,
      };
    case END_SEARCH:
      return {
        ...state,
        results: action.payload,
        isSearching: false,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        searchParams: '',
        searchKey: '',
        results: [],
        isSearching: false,
      };
    default:
      return state;
  }
}
