let initialState = {
  loading: false, 
  pictures: []
}

function catsReducer(state = initialState, action) {
    switch (action.type) {
   
      case 'LOADING_CATS':
        return {...state, loading: true};
      
      case 'FETCH_CATS':
        return {...state, loading: false, pictures: action.catPics};
   
      default:
        return state;
    }
};

export default catsReducer;