import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_ERROR,
    FILTER_BY_NAME_REQUEST,
    FILTER_BY_NAME_SUCCESS,
    FILTER_BY_NAME_ERROR,
    FILTER_BY_STATUS_REQUEST,
    FILTER_BY_STATUS_SUCCESS,
    FILTER_BY_STATUS_ERROR,
    CLEAR_FILTER_STATUS_REQUEST,
    CLEAR_FILTER_STATUS_SUCCESS,
    CLEAR_FILTER_STATUS_ERROR,
} from '../actions/index';

const initialState = {
    dataList: [],
    isFetching: false,
    radioStatus: 0,
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_DATA_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }

        case GET_DATA_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                dataList: payload,
            };
        }

        case GET_DATA_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: payload,
            };
        }

        case FILTER_BY_NAME_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }

        case FILTER_BY_NAME_SUCCESS: {
            const { _data, payload: _payload } = payload;
            return {
                ...state,
                isFetching: false,
                dataList: _data,
                radioStatus: 0,
            };
        }

        case FILTER_BY_NAME_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: payload,
            };
        }

        case FILTER_BY_STATUS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }

        case FILTER_BY_STATUS_SUCCESS: {
            const { _data, payload: _payload } = payload;
            return {
                ...state,
                isFetching: false,
                dataList: _data,
                radioStatus: _payload,
            };
        }

        case FILTER_BY_STATUS_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: payload,
            };
        }

        case CLEAR_FILTER_STATUS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }

        case CLEAR_FILTER_STATUS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                dataList: payload,
                radioStatus: 0,
                error: null,
            };
        }

        case CLEAR_FILTER_STATUS_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: payload,
            };
        }

        default:
            return state;
    }
}
