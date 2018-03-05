import reducer from '../reducers/category';
require('jest');

describe('Category Reducer', () => {
  it('should return the initial state on first call', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle CATEGORY_CREATE', () => {
    let categoryOne = { _id: '1234', name: 'cats', timestamp: new Date() };
    let categoryTwo = { _id: '4567', name: 'dogs', timestamp: new Date() };

    let state = reducer([categoryOne], {
      type: 'CATEGORY_CREATE',
      payload: categoryTwo,
    });

    expect(state).toContain(categoryOne);
    expect(state).toContain(categoryTwo);
  });
});