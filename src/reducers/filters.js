// Filters Reducer

const filtersReducerDefaultState = {
  status: 1,
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SORT_BY_STATUS':
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};
