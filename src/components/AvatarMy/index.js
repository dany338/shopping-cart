import React  from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

/* Style Components */
import { Card } from './styled'

/* Assets */
import assets from '../../assets'

const AvatarMy = ({ name }) => {
  return (
    <Card>
      <div>
        <img src={assets.avatarMale} alt={'My Avatar'} />
      </div>
      <div className="avatar-name">
        <h3>{name}</h3>
      </div>
    </Card>
  )
}

AvatarMy.propTypes = {
  name: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
  return {
    name: state.personalsReducer.data.fullname,
  }
}

const mapDispatchToProps = dispatch => {
  return null
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AvatarMy))
