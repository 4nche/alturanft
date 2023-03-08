import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

export enum ButtonStyle {
  Normal = 'normal',
  ContentOnly = 'bare',
}

interface Props {
  buttonStyle?: ButtonStyle
  children: React.ReactNode
}

const StyledButton = styled.div<{ buttonStyle: Props['buttonStyle'] }>`
  display: block;
  width: fit-content;
  font-size: ${props => props.theme.fontSize.default};
  border-radius: ${props => props.theme.borderRadius.sm};

  ${props => (props.buttonStyle === ButtonStyle.ContentOnly) ? `
    background-color: transparent;
    border: 0
  ` : ``}

  ${props => (props.buttonStyle === ButtonStyle.Normal) ? `
    background-color: ${props.theme.colors.background200};
    border: 1px solid ${props.theme.colors.background200};
    padding: ${props.theme.spacing[10]} ${props.theme.spacing[15]};
  ` : ``}

  color: ${props => props.theme.colors.foreground700} !important;
  transition:
    border 250ms ${props => props.theme.animation.default},
    color 250ms ${props => props.theme.animation.default};
  cursor: pointer;
  user-select: none;

  & svg {
    fill: ${props => props.theme.colors.foreground700} !important;
  }

  &:hover {
    ${props => (props.buttonStyle === ButtonStyle.Normal) ? `
      border: 1px solid ${props.theme.colors.red200} !important;
    ` : ``}

    color: ${props => props.theme.colors.red200} !important;

    & svg {
      fill: ${props => props.theme.colors.red200} !important;
    }
  }

`

function Button(props: Props) {
  const {
    children,
    buttonStyle: style = ButtonStyle.Normal,
  } = props

  return (
    <StyledButton buttonStyle={style}>{children}</StyledButton>
  )
}

export default Button
