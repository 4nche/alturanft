import { useRouter } from 'next/router'
import { transparentize } from 'polished'
import React from 'react'
import styled from 'styled-components'
import ApplicationHeader from '~/components/ApplicationHeader'
import SearchBar from '~/components/SearchBar'
import { devices } from '~/styles/theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

const ContentContainer = styled.div`
  margin-top: 65px;
`

interface Props {
  children: React.ReactNode
}

function StandardTemplate(props: Props) {

  return (
    <Container>
      <ApplicationHeader />
      <ContentContainer>
        {props.children}
      </ContentContainer>
    </Container>
  )
}

export default StandardTemplate
