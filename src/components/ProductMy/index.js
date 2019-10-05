import React  from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card } from './styled'

const ProductMy = (props) => {
  return (
    <Card>
    </Card>
  )
}

ProductMy.propTypes = {
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
