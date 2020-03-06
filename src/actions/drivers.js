import axios from '../axios-config';

// LIST_DRIVER
export const listDrivers = ( drivers ) => {
    return {
        type: 'LIST_DRIVER',
        drivers: drivers
    };
};

export const initListDrivers = () => {
    return dispatch => {
        axios.get( `v1/drivers` )
            .then( response => {
                if(response.data.status === 200) {
                    dispatch(listDrivers(response.data.data));
                }
            } )
            .catch( error => {
                console.log(error);
            } );
    };
};

