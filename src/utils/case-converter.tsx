import {SearchCaseAsteriks} from '../redux/types';

function caseConverter(_case: SearchCaseAsteriks, key: string) {
  switch (_case[0]) {
    case 'start':
      return `${key}*`;
    case 'end':
      return `*${key}`;
    case 'contain':
      return `*${key}*`;
    case 'exactly':
      return `${key}`;
    default:
      return key;
  }
}

export default caseConverter;
