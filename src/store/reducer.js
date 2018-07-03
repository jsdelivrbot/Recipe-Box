import * as actionTypes from './actions';

const initialState = {
customOrder: null,
favourites: [],
popularRecipes: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_CUSTOM_ORDER:

    return {
      ...state,
      customOrder: action.order
    }
    case actionTypes.ADD_REMOVE_FAVOURITE:
      const popularRecipes = [...this.state.popularRecipes];
      let favourites = [...this.state.favourites];
      const recipe = popularRecipes.find(el => el.id === action.id);
      const alreadyThere = favourites.indexOf(recipe);

      if (alreadyThere === -1) {
        favourites.push(recipe);
      } else {
        const index = favourites.findIndex(el => el.id === action.id);
        favourites.splice(index, 1);
      }
      return {
        ...state,
        favourites
      }
    default: return state;
  }
};

export default reducer