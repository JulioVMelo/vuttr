import { takeLatest, put, all, call } from 'redux-saga/effects';
import api from '../services/api';

// Remove a ferramenta da listagem
function* asyncRemoveTool(action) {
  yield put({ type: 'REMOVE_TOOL_SUCCESS', payload: {id: action.payload.id} });
}

// Recebe a lista de ferramentas 
function* asyncListTools() {
  try {
    const response  = yield call(api.get, '/tools');

    yield put({type: 'LIST_TOOLS', payload: response})
    
  } catch (err) {
    console.log(err);
  }
}

// Trata todas as actions que o sagas está ouvindo
export default function* root() {
  yield all([
    takeLatest('ASYNC_LIST_TOOLS', asyncListTools),
    takeLatest('ASYNC_REMOVE_TOOL', asyncRemoveTool),
  ]);
}
