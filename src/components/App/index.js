import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

// Include Pages in the router
import Home from '../../pages/Home'

// Call store
import store from '../../store'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
