import React, { Component } from 'react'
import styled from 'styled-components'

const WrapperButton = styled.button`
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;

  &:hover {
    background: #2ecc71;
  }
`

class Button extends Component {
  render () {
    const { children, onClick } = this.props

    return <WrapperButton onClick={onClick}>{children}</WrapperButton>
  }
}

export default Button
