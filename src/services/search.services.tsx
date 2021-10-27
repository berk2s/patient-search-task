import {SearchRequestParams, SearchResult} from '../redux/types';
import client from './axios.services';

export const searchService = {
  search,
};

async function search(params: SearchRequestParams): Promise<SearchResult> {
  const searchResults: SearchResult = await client.get('/', {
    params,
    headers: {
      'Content-Type': 'application/fhir+json',
    },
  });

  console.log(params);

  return searchResults;
}
