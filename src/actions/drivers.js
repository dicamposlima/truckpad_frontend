import axios from '../axios-config';

// LIST_DRIVER
export const listDrivers = ( drivers ) => {
    return {
        type: 'LIST_DRIVER',
        drivers: drivers
    };
};

export const initListDrivers = () => (
   async dispatch => {
        let response = await axios.get( `v1/drivers` )
        if(response.data.status === 200) {
            await dispatch(listDrivers(response.data.data));
        } else {
            console.log("Error");
        }
   }
);

// ADD_DRIVER
export const addDriver = (driver) => ({
  type: 'ADD_DRIVER',
  driver
});

export const initAddDriver = (driverData = {}) => {

  return async (dispatch) => {
    const {
      name = '',
      gender = '',
      has_vehicles = null,
      cnh = '',
      phone= null,
      date_of_birth = null,
      cpf= '',
      cnh_type = ''
    } = driverData;
    const driver = { payload: {
        name, gender, has_vehicles, cnh, phone, date_of_birth, cpf, cnh_type
        }
    };

    const response = await axios.post( `v1/drivers`, driver )
    if(response.data.status === 201) {
        await dispatch(addDriver({...driverData}));
        await dispatch(initListDrivers());
    } else {
        console.log("Error");
    }
  };
};


// EDIT_DRIVER
export const editDriver = (id, updates) => ({
  type: 'EDIT_DRIVER',
  id,
  updates
});

export const initEditDriver = (id, updates) => {
    const {name, gender, has_vehicles, cnh, phone, date_of_birth, cpf, cnh_type } = updates
    const driver = { payload: {
        name, gender, has_vehicles, cnh, phone, date_of_birth, cpf, cnh_type
        }
    };
    return (dispatch) => {
    axios.put( `v1/drivers/${id}`, driver )
        .then( response => {
            dispatch(editDriver(updates));
        } )
        .catch( error => {
            console.log(error);
        });
    };
};

// EDIT_STATUS
export const editStatus = (id, active) => ({
    type: 'EDIT_STATUS',
    id,
    active
  });

  export const initEditStatus = (id, active) => {
      const driver = { payload: { active } };
      return (dispatch) => {
        axios.put( `v1/drivers/${id}/active`, driver )
            .then( response => {
                dispatch(editStatus(active));
            } )
            .catch( error => {
                console.log(error);
            });
        };
  };
