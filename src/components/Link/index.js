import React  from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container } from './styled'

const Link = ({ children, active, onClick }) => {
  return (
    <Container active={active} onClick={onClick}>
      {children}
    </Container>
  )
}

Link.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.oneOf([true, false]).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default connect(
  null,
  null
)(withRouter(Link))
