let initialState = {};

export default (state = initialState, action) => {
  let {type, payload} = action;
  let categoryId, categoryExpenses, updatedExpenses;

  switch (type) {
  case 'CATEGORY_CREATE': return { ...state, [payload._id]: [] };

  case 'CATEGORY_DELETE': {
    let changedState = { ...state };
    delete changedState[payload._id];
    return changedState; 
  }

  case 'EXPENSE_CREATE':
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];
    updatedExpenses = [...categoryExpenses, payload];
    return {...state, [categoryId]: updatedExpenses};

  case 'EXPENSE_UPDATE':
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];
    updatedExpenses = categoryExpenses.map(exp => exp._id === payload._id ? payload : exp);
    return {...state, [categoryId]: updatedExpenses};

  case 'EXPENSE_DELETE': {
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];
    updatedExpenses = state[categoryId].filter(exp => exp._id !== payload._id);
    return {...state, [categoryId]: updatedExpenses};
  }

  case 'EXPENSE_RESET': return initialState;

  default: return state;
  }
};
