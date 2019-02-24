import React, { Component } from 'react'
import styled from 'styled-components'

const WrapperLink = styled.button`
  background: none !important;
  color: #fff;
  border: none;
  padding: 0 !important;
  font: inherit;
  border-bottom: 1px solid #444;
  cursor: pointer;
  text-align: left;
`

class Link extends Component {
  render () {
    const { children, onClick } = this.props

    return <WrapperLink onClick={onClick}>{children}</WrapperLink>
  }
}

export default Link
