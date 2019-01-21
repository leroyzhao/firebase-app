const initState = {
  projects: [
    {id: '1', title: 'abc', content: 'blah blahblahblah blah'},
    {id: '2', title: 'def', content: 'blah blahblahblah blah'},
    {id: '3', title: 'xyz', content: 'blah blahblahblah blah'},
  ]
}

const projectReducer = (state = initState, action) => {
  return state
}

export default projectReducer