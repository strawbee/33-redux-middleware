import reducer from '../reducers/expense';
require('jest');

describe('Expense Reducer', () => {
  it('should return the initial state on first call', () => {
    expect(reducer([], {})).toEqual([]);
  });
});