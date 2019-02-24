import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.input`
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;

  &:focus {
    width: 280px;
    border-color: #2ecc71;
  }
`

class Input extends Component {
  render () {
    const { type, placeholder, onChange, value } = this.props

    return <Wrapper type={type} placeholder={placeholder} onChange={onChange} value={value} />
  }
}

export default Input
