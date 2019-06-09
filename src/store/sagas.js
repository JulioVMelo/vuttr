import { takeLatest, put, all } from 'redux-saga/effects';

function* asyncRemoveTool(action) {
  yield put({ type: 'REMOVE_TOOL', payload: {id: action.payload.id} });
}

export default function* root() {
  yield all([
    takeLatest('ASYNC_REMOVE_TOOL', asyncRemoveTool),
  ]);
}
