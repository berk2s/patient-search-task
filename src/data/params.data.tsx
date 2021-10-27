interface DropdownData {
  id: any;
  key: string;
  value: string;
}

export const searchCasesData: DropdownData[] = [
  {
    id: 0,
    key: 'Show results starting with search key',
    value: 'end',
  },
  {
    id: 1,
    key: 'Show results ending with search key',
    value: 'start',
  },
  {
    id: 2,
    key: 'Show results containing with search key',
    value: 'contain',
  },
  {
    id: 3,
    key: 'Show results exactly matches with search key',
    value: 'exactly',
  },
];

export const paramsData: DropdownData[] = [
  {
    id: 0,
    key: 'National ID',
    value: 'id',
  },
  {
    id: 1,
    key: 'Name',
    value: 'name',
  },
  {
    id: 2,
    key: 'Given Name',
    value: 'given',
  },
  {
    id: 3,
    key: 'Family',
    value: 'family',
  },
];
