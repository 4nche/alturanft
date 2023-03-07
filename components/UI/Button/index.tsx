import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
  href?: string
}

const StyledButton = styled.div`
  border: 0;
  display: block;
  width: fit-content;
  padding: ${props => props.theme.spacing[10]} ${props => props.theme.spacing[15]};
  font-size: ${props => props.theme.fontSize.default};
  border-radius: ${props => props.theme.borderRadius.sm};
  background-color: ${props => props.theme.colors.background200};
  color: ${props => props.theme.colors.foreground700} !important;
  border: 1px solid ${props => props.theme.colors.background200};
  transition:
    border 250ms ${props => props.theme.animation.default},
    color 250ms ${props => props.theme.animation.default};
  cursor: pointer;
  user-select: none;

  &:hover {
    border: 1px solid ${props => props.theme.colors.red200} !important;
    color: ${props => props.theme.colors.red200} !important;
  }

`

function Button(props: Props) {
  const {
    children,
  } = props

  return (
    <StyledButton>{children}</StyledButton>
  )
}

export default Button
