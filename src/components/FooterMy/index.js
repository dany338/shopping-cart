import React  from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card } from './styled'

const FooterMy = (props) => {
  return (
    <Card>
    </Card>
  )
}

FooterMy.propTypes = {
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
)(withRouter(FooterMy))
