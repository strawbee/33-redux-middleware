let validate = item => {
  if (!item._id || !item.name || !item.timestamp) {
    throw new Error('Validation Error: category or expense must contain ID, name, and timestamp.');
  }
};

export default (state = {}, action) => {
  let {type, payload} = action;
  let categoryId, categoryExpenses, updatedExpenses;

  switch (type) {
  case 'CATEGORY_CREATE': 
    validate(payload);
    return { ...state, [payload._id]: [] };

  case 'CATEGORY_DELETE': {
    validate(payload);
    let changedState = { ...state };
    delete changedState[payload._id];
    return changedState; 
  }

  case 'EXPENSE_CREATE':
    validate(payload);
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];
    updatedExpenses = [...categoryExpenses, payload];
    return {...state, [categoryId]: updatedExpenses};

  case 'EXPENSE_UPDATE':
    validate(payload);
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];
    updatedExpenses = categoryExpenses.map(exp => exp._id === payload._id ? payload : exp);
    return {...state, [categoryId]: updatedExpenses};

  case 'EXPENSE_DELETE': {
    validate(payload);
    categoryId = payload.categoryId;
    categoryExpenses = state[categoryId];
    updatedExpenses = state[categoryId].filter(exp => exp._id !== payload._id);
    return {...state, [categoryId]: updatedExpenses};
  }

  case 'EXPENSE_RESET': return {};

  default: return state;
  }
};
