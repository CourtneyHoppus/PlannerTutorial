const initState = {
  projects: [
    {id: '1', title: 'create an app', content: 'word word word'},
    {id: '2', title: 'finish homework', content: 'word word'},
    {id: '3', title: 'party', content: 'word word word word'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer
