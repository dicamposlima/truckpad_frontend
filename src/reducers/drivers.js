// Drivers Reducer
const driversReducerDefaultState = [];

export default (state = driversReducerDefaultState, action) => {
  switch (action.type) {
    case 'LIST_DRIVER':
        action.drivers.map((driver) => {
            driver.key = driver.id
        })
      return [
        ...state,
        action.drivers
      ];
    case 'ADD_DRIVER':
        return [
            ...state,
            action.driver
        ];
    case 'EDIT_DRIVER':
      return state.map((driver) => {
        if (driver.id === action.id) {
          return {
            ...driver,
            ...action.updates
          };
        } else {
          return driver;
        };
      });
      case 'EDIT_STATUS':
        return state.map((driver) => {
          if (driver.id === action.id) {
            return {
              ...driver,
              ...action.active
            };
          } else {
            return driver;
          };
        });
    default:
      return state;
  }
};
