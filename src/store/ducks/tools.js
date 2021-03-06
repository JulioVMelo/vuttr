// Reducers
const INITIAL_STATE = {
  data: [{
    id: 1,
    title: 'title',
    description: 'descricao',
    link: 'http://',
    tags: [],
  }],
  showPanelAdd: false,
  onlyTags: false,
};

export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LIST_TOOLS_SUCCESS":
    
      return {...state, data: action.payload.data};
    
    case "LIST_TOOLS_FAILURE":
      
      return state;
    
    case "REMOVE_TOOL_SUCCESS":

      return state.filter(tool => tool.id !== action.payload.id);
  
    case "TOGGLE_ADD_PANEL":

      const showPanelAdd = !state.showPanelAdd;
      return {...state, showPanelAdd: showPanelAdd};
    
    case "TOGGLE_TAGS":
      
      return {...state, onlyTags: action.payload.tags};
  
    case "LIST_TOOLS_SEARCH_SUCCESS":
      return {...state, data: action.payload.data}

      default:
      return state;
  }
}

//   Actions
export const Creators = {
  listTools: () => ({
    type: "LIST_TOOLS"
  }),

  removeTool: id => ({
    type: "ASYNC_REMOVE_TOOL",
    payload: { id }
  }),

  asyncListTools: () => ({
    type: "ASYNC_LIST_TOOLS",
    payload: {}
  }),

  toggleAddPanel: () => ({
    type: "TOGGLE_ADD_PANEL",
    payload: {}
  }),

  addTool: (data) => ({
    type: "ASYNC_ADD_TOOL",
    payload: { data }
  }),

  searchTool: (query) => ({
    type: "ASYNC_SEARCH_TOOL",
    payload: { query }
  }),

  toggleTags: (tags) => ({
    type: "TOGGLE_TAGS",
    payload: {tags},
  }),

};
