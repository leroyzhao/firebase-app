const initState = {
  projects: [
    {id: '1', title: 'abc', content: 'blah blahblahblah blah'},
    {id: '2', title: 'def', content: 'blah blahblahblah blah'},
    {id: '3', title: 'xyz', content: 'blah blahblahblah blah'},
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
  }
  return state
}

export default projectReducer