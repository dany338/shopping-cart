import React  from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card } from './styled'

const FiltersMy = (props) => {
  return (
    <Card>
    </Card>
  )
}

FiltersMy.propTypes = {
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
)(withRouter(FiltersMy))
