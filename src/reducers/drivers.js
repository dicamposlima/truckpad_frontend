// Drivers Reducer

const driversReducerDefaultState = [];

export default (state = driversReducerDefaultState, action) => {
  switch (action.type) {
    case 'LIST_DRIVER':
        action.drivers.map((driver) => {
            driver.key = driver.id
            return driver
        })
      return [
        ...state,
        action.drivers
      ];
    default:
      return state;
  }
};
