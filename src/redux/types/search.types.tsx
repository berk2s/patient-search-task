export const START_SEARCH = 'START_SEARCH';
export const END_SEARCH = 'END_SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export type SearchParams = 'name' | 'given' | 'family' | 'id' | '';

export type SearchCaseAsteriks = 'end' | 'start' | 'contain' | 'exactly';

export interface SearchState {
  searchParams: Array<SearchParams>;
  searchKeys: string[];
  results: SearchResult[];
  isSearching: boolean;
}

export interface SearchRequestParams {
  name?: string;
  given?: string;
  family?: string;
  id?: string;
}

export interface SearchItem {
  fullUrl: string;
  resource: {
    resourceType: string;
    id: string;
    active: boolean;
    name: {
      family: string;
      given: string[];
    }[];
    telecom: {
      system: 'phone' | 'email' | any;
      value: string;
      use: string;
    }[];
    gender: string;
    birthDate: Date;
    address: {
      use: string;
      line: string[];
      city: string;
      postalCode: string;
      country: string;
    }[];
  };
}

export interface SearchResult {
  entry?: SearchItem[];
  id: string;
  total: number;
  meta: {
    lastUpdated?: Date;
  };
}

interface StartSearchingPayload {
  searchParams: Array<SearchParams>;
  searchKeys: string[];
}

interface StartSearchingAction {
  type: typeof START_SEARCH;
  payload: StartSearchingPayload;
}

interface EndSearchingAction {
  type: typeof END_SEARCH;
  payload: SearchResult;
}

interface ClearSearchingAction {
  type: typeof CLEAR_SEARCH;
}

export type SearchActionTypes =
  | ClearSearchingAction
  | StartSearchingAction
  | EndSearchingAction;
