import React from 'react'
import styled from 'styled-components'
import Logo from '~/components/Logo'

const Container = styled.header`
  width: 100%;
  height: 65px;
  /* padding-top: ${props => props.theme.spacing[15]}; */
  /* padding-bottom: ${props => props.theme.spacing[15]}; */
  padding-left: ${props => props.theme.spacing[20]};
  border-bottom: 1px solid ${props => props.theme.colors.background400};
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  user-select: none;
  background-color: ${props => props.theme.colors.background900};
  z-index: 99;
`

const LogoContainer = styled.div`
  margin-right: 15px;
`

const TextSpan = styled.span`
  display: inline-flex;
  margin-right: 5px;
`

const TextSpanBold = styled(TextSpan)`
  font-weight: 700;
`

const ApplicationName = styled.div`
  margin-top: -2px;
`

function ApplicationHeader() {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ApplicationName>
        <TextSpanBold>anche</TextSpanBold><TextSpan>+</TextSpan><TextSpanBold>altura nft</TextSpanBold>
      </ApplicationName>
    </Container>
  )
}

export default ApplicationHeader
