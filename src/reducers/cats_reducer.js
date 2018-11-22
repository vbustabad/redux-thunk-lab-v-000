function catsReducer(state = [], action) {
    switch (action.type) {
   
      case 'FETCH_CATS':
        return action.cats

      case 'LOADING_CATS':
        return state.concat(action.cats)
   
      default:
        return state;
    }
};