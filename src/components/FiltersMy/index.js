import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

/* Dispatchers */
import { setFiltersQueryRequest } from '../dispatchers'

/* Components */
import Link from '../Link'

/* Style Components */
import { Container } from './styled'

const filters = [{ text: 'Bought' }, { text: 'Pending' }, { text: 'Unpaid' }]

const FiltersMy = ({ setFilterQuery }) => {
  const [activeButton, setActiveButton] = useState(filters[0].text)

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName)
    setFilterQuery('query', buttonName)
  }

  return (
    <Container>
      <div>
        <div className="sort-by">
          {filters.map(filter => (
            <Link
              key={filter.text}
              active={activeButton === filter.text}
              onClick={() => handleButtonClick(filter.text)}
            >
              {filter.text}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  )
}

FiltersMy.propTypes = {
  setFilterQuery: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return null
}

const mapDispatchToProps = dispatch => {
  return {
    setFilterQuery: (name, value) => dispatch(setFiltersQueryRequest(name, value)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FiltersMy))
