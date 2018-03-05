export default store => next => action => {
  try {
    return next(action);
  } catch (err) {
    throw err;
  }
};