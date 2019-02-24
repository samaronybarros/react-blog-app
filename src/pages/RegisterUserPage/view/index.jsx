import React, { Component } from 'react'

import { Box, Title, Input, Button, Error } from '../../../components'

class RegisterUserPageView extends Component {
  render () {
    const {
      onClick,
      onChangeUsername,
      onChangePassword,
      onChangeConfirmPassword,
      username,
      password,
      confirmPassword,
      error
    } = this.props

    return (
      <Box>
        <Title>Register User</Title>

        <Input
          type={'text'}
          value={username}
          placeholder={'Username'}
          onChange={onChangeUsername}
        />

        {error && error.errUser ? <Error>{error.errUser}</Error> : null}

        <Input
          type={'password'}
          value={password}
          placeholder={'Password'}
          onChange={onChangePassword}
        />

        {error && error.errPass ? <Error>{error.errPass}</Error> : null}

        <Input
          type={'password'}
          value={confirmPassword}
          placeholder={'Confirm Password'}
          onChange={onChangeConfirmPassword}
        />

        <Button onClick={onClick}>Register</Button>
      </Box>
    )
  }
}

export default RegisterUserPageView
