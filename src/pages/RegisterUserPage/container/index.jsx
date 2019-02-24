import React, { Component } from 'react'

import { formatError } from '../../../utils'

import api from '../../../api'
import RegisterUserPageView from '../view'

class RegisterUserPageContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      isLoading: false,
      error: null,
      token: ''
    }
  }

  componentWillMount () {
    console.log(
      'TCL: RegisterUserPageContainer -> handleRegisterUser -> username',
      this.state.username
    )
  }

  handleChangeUsername = event => {
    this.setState({ username: event.target.value })
  }

  handleChangePassword = event => {
    this.setState({ password: event.target.value })
  }

  handleChangeConfirmPassword = event => {
    this.setState({ confirmPassword: event.target.value })
  }

  handleRegisterUser () {
    const { username, password, confirmPassword } = this.state
    const user = { username, password, confirmPassword }

    if (user) {
      this.setState({ isLoading: true })
      api
        .registerUser(user)
        .then(res => {
          this.setState({ isLoading: false, token: res.data.token })
        })
        .catch(err => {
          console.log('TCL: RegisterUserPageContainer -> handleRegisterUser -> err', err.response)

          this.setState({ error: formatError(err.response.data), isLoading: false })
        })
    }
  }

  render () {
    const { isLoading, username, password, confirmPassword, error } = this.state
    return (
      <RegisterUserPageView
        username={username}
        password={password}
        confirmPassword={confirmPassword}
        onChangeUsername={event => this.handleChangeUsername(event)}
        onChangePassword={event => this.handleChangePassword(event)}
        onChangeConfirmPassword={event => this.handleChangeConfirmPassword(event)}
        onClick={() => this.handleRegisterUser()}
        isLoading={isLoading}
        error={error}
      />
    )
  }
}

export default RegisterUserPageContainer
