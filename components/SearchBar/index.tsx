import { transparentize } from 'polished'
import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  font-size: ${props => props.theme.fontSize.lg};
  background-color: ${props => props.theme.colors.background700};
  border: 0;
  border-radius: ${props => props.theme.borderRadius.default};
  outline: 0;
  padding: ${props => `${props.theme.spacing[15]} ${props.theme.spacing[20]}`};
  color: ${props => props.theme.colors.foreground700};
  // parent should define this
  width: 100%;
  outline: 1px solid ${props => props.theme.colors.background700};
  transition: outline 1s ${props => props.theme.animation.default};
  box-sizing: border-box;

  &:hover {
    outline-color: ${props => transparentize(0.75,props.theme.colors.foreground100)};
  }
  &:focus {
    outline-color: ${props => transparentize(0.5,props.theme.colors.foreground100)};
  }

  &:focus::placeholder {
    color: ${props => props.theme.colors.background100};
  }

  &::placeholder {
    color: ${props => props.theme.colors.foreground100};
  }
`

type InputHTMLProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'ref' | 'onChange' | 'onSubmit' | 'value'
>

type Props = {
  value: string
  onChange: (newValue: string) => void
  onSubmit: () => void
  validator?: (value?: string) => string | undefined
} & InputHTMLProps


export default function SearchBar(props: Props) {
  const {
    onChange, onSubmit, value, ...rest
  } = props

  const elem = React.useRef<HTMLInputElement>()

  const onKeyDown = React.useCallback((evt: KeyboardEvent) => {
    if (evt.key.toLowerCase() === 'enter') {
      // if value is valid, call the onSubmit callback so the parent can do what it want
      onSubmit()
    }
  }, [onSubmit])

  // set an event listener for the enter key on the input
  React.useEffect(() => {
    if (!elem) {
      return
    }

    const inputElem = elem.current

    inputElem.addEventListener('keydown', onKeyDown)

    return () => {
      inputElem.removeEventListener('keydown', onKeyDown)
    }
  }, [elem, onSubmit])

  return (
    <StyledInput
      ref={elem}
      type="text"
      placeholder='search for an .eth address'
      spellCheck={false}
      onChange={(evt) => props.onChange(evt.target.value)}
      {...rest}
    />
  )
}
