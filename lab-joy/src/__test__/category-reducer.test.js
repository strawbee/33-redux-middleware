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

  it('should handle CATEGORY_UPDATE', () => {
    let categoryOne = { _id: '1234', name: 'cats', timestamp: new Date() };
    let categoryTwo = { _id: '1234', name: 'dogs', timestamp: new Date() };

    let state = reducer([categoryOne], {
      type: 'CATEGORY_UPDATE',
      payload: categoryTwo,
    });

    expect(state).toContain(categoryTwo);
  });

  it('should handle CATEGORY_DELETE', () => {
    let state = [{ _id: '1234', name: 'cats', timestamp: new Date() }];
    let category = { _id: '1234', name: 'cats', timestamp: new Date() };

    let newState = reducer(state, {
      type: 'CATEGORY_DELETE',
      payload: category,
    });

    expect(newState).toMatchObject([]);
  });

  it('should handle CATEGORY_RESET', () => {
    let state = [{ _id: '1234', url: 'photo.jpg', description: 'a photo', owner: 'me', timestamp: new Date() }];

    let newState = reducer(state, {
      type: 'CATEGORY_RESET',
    });

    expect(newState).toMatchObject([]);
  });
});