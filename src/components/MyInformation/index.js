import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

/* Components */
import HeaderMy from '../HeaderMy'
import FooterMy from '../AvatarMy'
import AvatarMy from '../FooterMy'

/* Style Components */
import { Card } from './styled'

const MyInformation = () => {
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

export default connect(
  null,
  null
)(withRouter(MyInformation))
