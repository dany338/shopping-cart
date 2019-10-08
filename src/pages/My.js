import React, { Component } from 'react'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
/* Dispatchers */
import { getMyInformationRequest } from '../dispatchers'

/* Components */
import MyInformation from '../components/MyInformation'
import FiltersMy from '../components/FiltersMy'
import ProductItems from '../components/ProductItems'
import FooterMy from '../components/FooterMy'

/* Style Components */
import { Container } from './styled'

class My extends Component {
  state = {
    classError: '',
  }

  componentDidMount() {
    const { getMyInformation } = this.props
    getMyInformation()
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { myInformation, loading, error } = this.props

    return (
      <Container>
        <MyInformation />
        <FiltersMy />
        <ProductItems />
        <FooterMy />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    myInformation: state.personalsReducer.data,
    loading: state.personalsReducer.loading,
    error: state.personalsReducer.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMyInformation: () => dispatch(getMyInformationRequest()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(My)
