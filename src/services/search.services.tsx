import {SearchRequestParams, SearchResult} from '../redux/types';
import client from './axios.services';

export const searchService = {
  search,
};

async function search(params: SearchRequestParams): Promise<SearchResult> {
  const searchResults: SearchResult = await client.get('/', {
    params,
  });

  return searchResults;
}
