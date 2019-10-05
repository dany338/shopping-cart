import React, { Component } from 'react'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
/* Dispatchers */
import { getMyInformationRequest } from '../dispatchers'

/* Components */
import MyInformation from '../components/MyInformation'
import FiltersMy from '../components/FiltersMy'
import ProductMy from '../components/ProductMy'

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
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {loading ? (
                Array.from({ length: myInformation.bought.length }, (_, index) => (
                  <div className="column is-3 is-one-quarter" key={index}>
                    <Skeleton width={237} height={250} />
                  </div>
                ))
              ) : (
                myInformation.bought.length > 0 &&
                myInformation.bought.map(product => (
                    <ProductMy  {...product} key={product.id}/>
                  ))
              )}
            </div>
          </div>
        </section>
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
