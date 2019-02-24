import React, { Component } from 'react'
import logo from './images/logo.svg'

import LoginPage from './pages/LoginPage/container'
import RegisterUserPage from './pages/RegisterUserPage/container'

class App extends Component {
  render () {
    return <RegisterUserPage />
  }
}

export default App
