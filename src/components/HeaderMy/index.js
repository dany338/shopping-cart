import React  from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container } from './styled'

const HeaderMy = ({ title }) => {
  return (
    <Container>
      <div>
        <span className="icon my-color-icon">
          <i className="fas fa-cog"></i>
        </span>
      </div>
      <div className="my-title">
        <h3>{title}</h3>
      </div>
      <div>
        <span className="icon my-color-icon">
          <i className="far fa-comment-dots"></i>
        </span>
      </div>
    </Container>
  )
}

HeaderMy.propTypes = {
  title: PropTypes.string.isRequired,
}

export default connect(
  null,
  null
)(withRouter(HeaderMy))
