// Filters Reducer

const filtersReducerDefaultState = {
    inactives: false,
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_BY_STATUS':
      return {
        ...state,
        inactives: action.inactives
      };
    default:
      return state;
  }
};
