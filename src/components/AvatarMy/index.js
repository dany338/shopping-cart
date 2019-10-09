import React  from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

/* Style Components */
import { Container } from './styled'

/* Assets */
import assets from '../../assets'

const AvatarMy = ({ name }) => {
  return (
    <Container>
      <div>
        <img src={assets.avatarMale} alt={'My Avatar'} />
      </div>
      <div className="avatar-name">
        <h3>{name}</h3>
      </div>
    </Container>
  )
}

AvatarMy.propTypes = {
  name: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  name: state.personalsReducer.data.fullname,
})

export default connect(
  mapStateToProps,
  null
)(withRouter(AvatarMy))
