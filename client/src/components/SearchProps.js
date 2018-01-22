import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


class SearchProps extends React.Component {

  componentDidMount(){
    const { dispatch, location: { pathname } } = this.props
    dispatch({ type: 'GET_CURRENT_PATH', pathName: pathname.slice(1) })
  }

  render() {
    return this.props.children
  }
}

export default withRouter(connect()(SearchProps));
