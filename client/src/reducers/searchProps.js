const searchProps = (state = false, action) => {
  switch(action.type){
    case 'ADD_SEARCH_FILTER':
      return action.visible
    default:
      return state
  }
}

export default searchProps
