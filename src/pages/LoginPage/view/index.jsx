import React, { Component } from 'react'

import { Box, Title, Input, Button, Link } from '../../../components'

class LoginPageView extends Component {
  render () {
    return (
      <Box>
        <Title>Login</Title>

        <Input type={'text'} placeholder={'Username'} />
        <Input type={'password'} placeholder={'Password'} />
        <Button>Login</Button>
        <Link>Criar conta</Link>
      </Box>
    )
  }
}

export default LoginPageView
