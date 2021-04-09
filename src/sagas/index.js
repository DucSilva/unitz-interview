import { put, takeLatest, all, delay } from "redux-saga/effects";
import {
    GET_DATA_REQUEST,
    getDataSuccess,
    getDataError,
    FILTER_BY_NAME_REQUEST,
    filterByNameSuccess,
    filterByNameError,
    FILTER_BY_STATUS_REQUEST,
    filterByStatusSuccess,
    filterByStatusError,
    CLEAR_FILTER_STATUS_REQUEST,
    clearStatusSuccess,
    clearStatusError
} from '../actions/index';
import data from '../unitz-test.json';

function* getData() {
    try {
        const _data = data?.data?.advisorProfileCollection?.items || [];
        yield delay(500); // because get data from json so it get very quickly => i just want to delay to check loading
        yield put(getDataSuccess(_data));
    } catch (error) {
        yield put(getDataError(error))
    }
}

function* watchGetData() {
    yield takeLatest(GET_DATA_REQUEST, getData);
}

function* filterByName({ payload }) {
    try {
        yield delay(500); // because get data from json so it get very quickly => i just want to delay to check loading

        const _data =  data?.data?.advisorProfileCollection?.items.filter((item) => item.displayName.toLowerCase().includes(payload.toLowerCase()));
     
        yield put(filterByNameSuccess({ _data, payload }));
    } catch (error) {
        yield put(filterByNameError(error));
        
    }
}

function* watchFilterByName() {
    yield takeLatest(FILTER_BY_NAME_REQUEST, filterByName);
}

function* sortByStatus({ payload }) {
    switch (payload) {
        case 1: {
            try {
                yield delay(500); // because get data from json so it get very quickly => i just want to delay to check loading

                const _data = data?.data?.advisorProfileCollection?.items.filter((item) => item?.isOnline === true);

                yield put(filterByStatusSuccess({ _data, payload }));
            } catch (error) {
                yield put(filterByStatusError(error))
            }
            break;
        }
        case 2: {
            try {
                yield delay(500); // because get data from json so it get very quickly => i just want to delay to check loading
                const _data = data?.data?.advisorProfileCollection?.items.filter((item) => item.isOnline === false);
                yield put(filterByStatusSuccess({ _data, payload }));
            } catch (error) {
                yield put(filterByStatusError(error))
            }
            break;
        }

        default: break;
    }
}

function* watchSortByStatus() {
    yield takeLatest(FILTER_BY_STATUS_REQUEST, sortByStatus);
}

function* clearSortStatus() {
    try {
        yield delay(500); // because get data from json so it get very quickly => i just want to delay to check loading

        const _data = data?.data?.advisorProfileCollection?.items;
        yield put(clearStatusSuccess(_data));
    } catch (error) {
        yield put(clearStatusError(error))
    }
}

function* watchClearSortStatus() {
    yield takeLatest(CLEAR_FILTER_STATUS_REQUEST, clearSortStatus);
}

export default function* rootSaga() {
    yield all([
        watchGetData(),
        watchFilterByName(),
        watchSortByStatus(),
        watchClearSortStatus()
    ]);
}
