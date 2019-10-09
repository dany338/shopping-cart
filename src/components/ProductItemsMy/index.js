import React, { useState, useEffect }  from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'

/* Dispatchers */
import { getMyInformationRequest, setFiltersQueryRequest } from '../../dispatchers'

/* Components */
import ProductMy from '../ProductMy'

/* Style Components */
import { Container } from './styled'

const ProductItemsMy = ({ productsBought, productsPending, productsUnpaid, loading, error, query, getMyInformation, setFilterQuery }) => {
  console.log('productsBought', productsBought, loading)
  const [isHidden, setIsHidden] = useState('')

  const handleLinkClose = () => {
    setIsHidden('is-hidden')
  }

  useEffect(() => {
    getMyInformation()
  }, [getMyInformation])

  return (
    <Container>
      {error && (
        <article className={`message is-danger ${isHidden}`}>
          <div className="message-header">
            <p>Ups, hubo un error:</p>
            <button className="delete" aria-label="delete" onClick={handleLinkClose}></button>
          </div>
          <div className="message-body">
            <strong>{error}</strong>
          </div>
        </article>
      )}
      {loading && (
        Array.from({ length: productsBought.length }, (_, index) => (
          <div className="column is-3 is-one-quarter" key={index}>
            <Skeleton width={237} height={250} />
          </div>
        ))
      )}
      {(query === 'Bought' ) && productsBought.map(product => (
        <ProductMy key={product._id} {...product} />
      ))}
      {(query === 'Pending' ) && productsPending.map(product => (
        <ProductMy key={product._id} {...product} />
      ))}
      {(query === 'Unpaid' ) && productsUnpaid.map(product => (
        <ProductMy key={product._id} {...product} />
      ))}
    </Container>
  )
}

ProductItemsMy.propTypes = {
  productsBought: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
    })
  ),
  productsPending:
    PropTypes.arrayOf(
      PropTypes.shape({
      _id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
    })
  ),
  productsUnpaid: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
    })
  ),
  loading: PropTypes.oneOf([true, false]).isRequired,
  error: PropTypes.oneOf([true, false]).isRequired,
  query: PropTypes.string.isRequired,
  getMyInformation: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  query: state.filtersMyReducer.filter.query,
  productsBought: state.personalsReducer.data.bought,
  productsPending: state.personalsReducer.data.pending,
  productsUnpaid: state.personalsReducer.data.unpaid,
  loading: state.personalsReducer.loading,
  error: state.personalsReducer.error,
})

const mapDispatchToProps = dispatch => ({
  getMyInformation: () => dispatch(getMyInformationRequest()),
  setFilterQuery: (name, value) => dispatch(setFiltersQueryRequest(name, value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductItemsMy))
