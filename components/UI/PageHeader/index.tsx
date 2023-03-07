import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const Header = styled.h3`
  font-weight: normal;
  font-size: ${props => props.theme.fontSize.xl};
  margin: 0;
  padding: 0 0 ${props => props.theme.spacing[30]} 0;
`

function PageHeader({ children }: Props) {
  return (
    <Header>{children}</Header>
  )
}

export default PageHeader
