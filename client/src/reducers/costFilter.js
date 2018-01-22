const costFilter = (state = 200, action) => {
  switch(action.type) {
    case 'SET_COST_FILTER':
      return action.cost;
    default:
      return state;
  }
}

export default costFilter;
