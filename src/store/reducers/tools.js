const INITIAL_STATE = [
  {
    "id": 1,
    "title": "Testando",
    "link": "https://notion.so",
    "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
    "tags": [
      "organization",
      "planning",
      "collaboration",
      "writing",
      "calendaar"
    ]
  },
  {
    "id": 2,
    "title": "Initial state",
    "link": "https://github.com/typicode/json-server",
    "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
    "tags": [
      "api",
      "json",
      "schema",
      "node",
      "github",
      "rest"
    ]
  }
];

export default function tools(state = INITIAL_STATE, action) {
  
  switch (action.type) {
    case 'LIST_TOOLS':
      return state;
    case 'REMOVE_TOOL':
      return state.filter(tool => tool.id !== action.payload.id);
    default: 
      return state;
  }
  
}
