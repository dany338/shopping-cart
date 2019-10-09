import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

/* Components */
import Link from '../Link'

/* Style Components */
import { Container } from './styled'

const buttons = [{ text: 'Home' }, { text: 'Store' }, { text: 'Shopcart' }, { text: 'My' }]

const FooterMy = (props) => {
  const [activeButton, setActiveButton] = useState(buttons[3].text)

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName)
  }

  return (
    <Container>
      <div>
        <div className="sort-by">
          {buttons.map(btn => (
            <Link
              key={btn.text}
              active={activeButton === btn.text}
              onClick={() => handleButtonClick(btn.text)}
            >
              {btn.text}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  )
}

FooterMy.propTypes = {
}

export default connect(
  null,
  null
)(withRouter(FooterMy))
