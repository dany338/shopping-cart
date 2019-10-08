import React  from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

/* Components */
import HeaderMy from '../HeaderMy'
import FooterMy from '../AvatarMy'
import AvatarMy from '../FooterMy'

/* Style Components */
import { Card } from './styled'

const MyInformation = ({ myInformation }) => {
  return (
    <Card>
      <HeaderMy title={'My Information'} />
      <AvatarMy />
      <FooterMy />
    </Card>
  )
}

MyInformation.propTypes = {
}

const mapStateToProps = state => {
  return {
    myInformation: state.personalsReducer.data,
  }
}

const mapDispatchToProps = dispatch => {
  return null
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MyInformation))
