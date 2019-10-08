import React, { useState, useEffect }  from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton'

/* Dispatchers */
import { getMyInformationRequest } from '../dispatchers'

/* Components */
import ProductMy from '../ProductMy'

/* Style Components */
import { Container } from './styled'

const ProductItems = ({ productsBought, productsPending, productsUnpaid, loading, error, query, onGetMyInformation }) => {
  const [isHidden, setIsHidden] = useState('')

  const handleLinkClose = () => {
    setIsHidden('is-hidden')
  }

  useEffect(() => {
    onGetMyInformation()
  }, [onGetMyInformation])

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

ProductItems.propTypes = {
  productsBought: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
  }),
  productsPending: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
  }),
  productsUnpaid: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
  }),
  children: PropTypes.string.isRequired,
  loading: PropTypes.oneOf([true, false]).isRequired,
  error: PropTypes.oneOf([true, false]).isRequired,
  onGetMyInformation: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    query: state.filtersMyReducer.filter.quey,
    productsBought: state.personalsReducer.data.bought,
    productsPending: state.personalsReducer.data.pending,
    productsUnpaid: state.personalsReducer.data.unpaid,
    loading: state.personalsReducer.loading,
    error: state.personalsReducer.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetMyInformation: () => dispatch(getMyInformationRequest()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductItems))
