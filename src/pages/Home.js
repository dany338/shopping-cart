import React, { Component } from 'react'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
/* Components */
import MyInformation from '../components/MyInformation'
import FiltersMy from '../components/FiltersMy'
import ProductMy from '../components/ProductMy'

/* Style Components */
import { Container } from './styled'

class Home extends Component {
  state = {
    classError: '',
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    return (
      <Container>
        <MyInformation />
        <FiltersMy />
        <ProductMy />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return null
}

const mapDispatchToProps = dispatch => {
  return null
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
