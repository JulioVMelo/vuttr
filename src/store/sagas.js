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
    yield put({type: 'LIST_TOOLS_SUCCESS', payload: response});
    
  } catch (err) {

    yield put({type: 'LIST_TOOLS_FAILURE'});
    console.log(err);
  }
}

function* asyncAddTool(action) {
  try {
    yield action.payload.data.tags =  action.payload.data.tags.split(' ');
    yield call(api.post, '/tools/', action.payload.data);
    yield put({type: 'TOGGLE_ADD_PANEL'});
    yield asyncListTools();
  } catch(err) {
    console.log(err);
  }
}

function* asyncSearchTool(action) {
  try {
    const response = yield call(api.get, `/tools/?q=${action.payload.query}`);
    yield put ({type: 'LIST_TOOLS_SEARCH_SUCCESS', payload: response})
  } catch(err) {
    console.log(err);
  }
}

// Trata todas as actions que o sagas está ouvindo
export default function* root() {
  yield all([
    takeLatest('ASYNC_LIST_TOOLS', asyncListTools),
    takeLatest('ASYNC_REMOVE_TOOL', asyncRemoveTool),
    takeLatest('ASYNC_ADD_TOOL', asyncAddTool),
    takeLatest('ASYNC_SEARCH_TOOL', asyncSearchTool)
  ]);
}
