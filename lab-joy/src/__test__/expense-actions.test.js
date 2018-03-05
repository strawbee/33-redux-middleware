import * as actions from '../actions/expense-actions';
require('jest');

describe('Expense Actions', () => {
  it('should create an action to add an expense', () => {
    let expense = { name: 'hello expense' };
    let action = actions.expenseCreate(expense);

    expect(action.type).toEqual('EXPENSE_CREATE');
    expect(action.payload).toHaveProperty('_id');
    expect(action.payload).toHaveProperty('timestamp');  });
});