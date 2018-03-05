import * as actions from '../actions/category-actions';
require('jest');

describe('Category Actions', () => {
  it('should create an action to add a category', () => {
    let category = { name: 'hello world' };
    let action = actions.categoryCreate(category);

    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload).toHaveProperty('_id');
    expect(action.payload).toHaveProperty('timestamp');
  });
});