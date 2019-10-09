import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
/* Dispatchers */
import { getMyInformationRequest } from '../dispatchers'

/* Components */
import MyInformation from '../components/MyInformation'
import FiltersMy from '../components/FiltersMy'
import ProductItemsMy from '../components/ProductItemsMy'
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
    const { query, getMyInformation } = this.props
    if(prevProps.query !== query) {
      getMyInformation()
    }
  }

  render() {
    return (
      <Container>
        <MyInformation />
        <FiltersMy />
        <ProductItemsMy />
        <FooterMy />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  query: state.filtersMyReducer.filter.query,
  myInformation: state.personalsReducer.data,
  loading: state.personalsReducer.loading,
  error: state.personalsReducer.error,
})

const mapDispatchToProps = dispatch => ({
  getMyInformation: () => dispatch(getMyInformationRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(My)
