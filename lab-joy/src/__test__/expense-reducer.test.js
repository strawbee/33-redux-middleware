import reducer from '../reducers/expense';
require('jest');

describe('Expense Reducer', () => {
  let date = new Date();

  it('should return the initial state on first call', () => {
    expect(reducer([], {})).toEqual([]);
  });

  it('should handle EXPENSE_CREATE', () => {
    let state = { '5678': [{ _id: '9879', name: 'state', expense: 30, categoryId: '5678', timestamp: date }] };
    let expense = { _id: '1234', name: 'expense', expense: 50, categoryId: '5678', timestamp: date };
    let newState = { '5678': [{ '_id': '9879', 'categoryId': '5678', 'expense': 30, 'name': 'state', timestamp: date }, { '_id': '1234', 'categoryId': '5678', 'expense': 50, 'name': 'expense', timestamp: date }] };

    state = reducer(state, {
      type: 'EXPENSE_CREATE',
      payload: expense,
    });

    expect(state).toMatchObject(newState);
  });

  it('should handle EXPENSE_UPDATE', () => {
    let state = { '5678': [{ _id: '9879', name: 'state', expense: 30, categoryId: '5678', timestamp: date }] };
    let expense = { _id: '9879', name: 'expense', expense: 50, categoryId: '5678', timestamp: date };
    let newState = { '5678': [{ _id: '9879', name: 'expense', expense: 50, categoryId: '5678', timestamp: date }] };

    state = reducer(state, {
      type: 'EXPENSE_UPDATE',
      payload: expense,
    });

    expect(state).toMatchObject(newState);
  });

  it('should handle EXPENSE_DELETE', () => {
    let state = { '5678': [{ _id: '9879', name: 'state', expense: 30, categoryId: '5678', timestamp: date }] };
    let expense = { _id: '9879', name: 'state', expense: 30, categoryId: '5678', timestamp: date };
    let newState = { '5678': [] };

    state = reducer(state, {
      type: 'EXPENSE_DELETE',
      payload: expense,
    });

    expect(state).toMatchObject(newState);
  });

  it('should handle EXPENSE_RESET', () => {
    let state = { '5678': [{ _id: '9879', name: 'state', expense: 30, categoryId: '5678', timestamp: date }] };
    let newState = {};

    state = reducer(state, {
      type: 'EXPENSE_RESET',
    });

    expect(state).toMatchObject(newState);
  });
});