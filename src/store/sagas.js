import { takeLatest, put, all, call } from 'redux-saga/effects';
import api from '../services/api';

// Remove a ferramenta da listagem
function* asyncRemoveTool(action) {
  try {
    yield call(api.delete, `/tools/${action.payload.id}`);
    
  }catch (err) {
    console.log('erro', err);
  }

  finally {
    yield asyncListTools();
  }
}

// Recebe a lista de ferramentas 
function* asyncListTools() {
  try {
    const response  = yield call(api.get, '/tools');
    yield put({type: 'LIST_TOOLS_SUCCESS', payload: response})
    
  } catch (err) {

    yield put({type: 'LIST_TOOLS_FAILURE'})
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
