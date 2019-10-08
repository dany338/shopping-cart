import React  from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container } from './styled'

const ProductMy = ({ _id, type, title, description, image, cost }) => {
  return (
    <Container onClick={() => console.log(_id)}>
      <img src={image} alt={title} />
      <div className="product-info">
        <p>{type}</p>
        <h4>{title}</h4>
      </div>
    </Container>
  )
}

ProductMy.propTypes = {
  _id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
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
)(withRouter(ProductMy))
