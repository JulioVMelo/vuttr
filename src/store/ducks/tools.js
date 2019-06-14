// Reducers
const INITIAL_STATE = [
  {
    id:1,
    title: 'testando',
    description: 'testando description',
    tags: ['tag1', 'tag2']
  }
 ];
 
 export default function tools(state = INITIAL_STATE, action) {
   
   switch (action.type) {
     case 'LIST_TOOLS':
       state = action.payload.data;
       return state;
     case 'ASYNC_LIST_TOOLS':
       return state;
     case 'REMOVE_TOOL_SUCCESS':
       return state.filter(tool => tool.id !== action.payload.id);
     default: 
       return state;
   }
   
 }
 

//   Actions
export const Creators = {
  listTools: () => ({
    type: 'LIST_TOOLS',
  }),
  
  removeTool: id => ({
    type: 'ASYNC_REMOVE_TOOL',
    payload: {id},
  }),
  
  asyncListTools: () => ({
    type: 'ASYNC_LIST_TOOLS',
    payload: {}
  }),
  
};

