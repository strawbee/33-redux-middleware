let validate = cat => {
  if (!cat._id || !cat.name || !cat.timestamp) {
    throw new Error('Validation Error: category must contain ID, name, and timestamp.');
  }
};


export default (state = [], action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE':
    validate(payload);
    return [...state, payload];
  case 'CATEGORY_UPDATE': 
    validate(payload);
    return state.map(cat => cat._id === payload._id ? payload : cat);
  case 'CATEGORY_DELETE': 
    validate(payload);
    return state.filter(cat => cat._id !== payload._id);
  case 'CATEGORY_RESET': return [];
  default: return state;
  }
};