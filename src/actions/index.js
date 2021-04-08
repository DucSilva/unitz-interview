const store = 'app';

export const GET_DATA_REQUEST = `${store}/GET_DATA_REQUEST`;
export const GET_DATA_SUCCESS = `${store}/GET_DATA_SUCCESS`;
export const GET_DATA_ERROR = `${store}/GET_DATA_ERROR`;

export const FILTER_BY_NAME_REQUEST = `${store}/FILTER_BY_NAME_REQUEST`;
export const FILTER_BY_NAME_SUCCESS = `${store}/FILTER_BY_NAME_SUCCESS`;
export const FILTER_BY_NAME_ERROR = `${store}/FILTER_BY_NAME_ERROR`;

export const FILTER_BY_STATUS_REQUEST = `${store}/FILTER_BY_STATUS_REQUEST`;
export const FILTER_BY_STATUS_SUCCESS = `${store}/FILTER_BY_STATUS_SUCCESS`;
export const FILTER_BY_STATUS_ERROR = `${store}/FILTER_BY_STATUS_ERROR`;

export const CLEAR_FILTER_STATUS_REQUEST = `${store}/CLEAR_FILTER_STATUS_REQUEST`;
export const CLEAR_FILTER_STATUS_SUCCESS = `${store}/CLEAR_FILTER_STATUS_SUCCESS`;
export const CLEAR_FILTER_STATUS_ERROR = `${store}/CLEAR_FILTER_STATUS_ERROR`;


export const getData = () => {
    return {
        type: GET_DATA_REQUEST,
    }
}

export const getDataSuccess = (data) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: data
    }
}

export const getDataError = (error) => {
    return {
        type: GET_DATA_ERROR,
        payload: error
    }
}

export const filterByName = ({payload}) => {
    return {
        type: FILTER_BY_NAME_REQUEST,
        payload
    }
}

export const filterByNameSuccess = (data) => {
    return {
        type: FILTER_BY_NAME_SUCCESS,
        payload: data
    }
}

export const filterByNameError = (error) => {
    return {
        type: FILTER_BY_NAME_ERROR,
        payload: error
    }
}

export const filterByStatus = (payload) => {
    return {
        type: FILTER_BY_STATUS_REQUEST,
        payload
    }
}

export const filterByStatusSuccess = (data) => {
    return {
        type: FILTER_BY_STATUS_SUCCESS,
        payload: data
    }
}

export const filterByStatusError = (error) => {
    return {
        type: FILTER_BY_STATUS_ERROR,
        payload: error
    }
}

export const clearStatus = () => {
    return {
        type: CLEAR_FILTER_STATUS_REQUEST,
    }
}

export const clearStatusSuccess = (data) => {
    return {
        type: CLEAR_FILTER_STATUS_SUCCESS,
        payload: data,
    }
}

export const clearStatusError = (error) => {
    return {
        type: CLEAR_FILTER_STATUS_ERROR,
        payload: error
    }
}