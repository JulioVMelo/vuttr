export const listTools = () => ({
  type: 'LIST_TOOLS',
});

export const removeTool = id => ({
  type: 'ASYNC_REMOVE_TOOL',
  payload: {id},
});
