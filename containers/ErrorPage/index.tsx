import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Button from '~/components/UI/Button'
import StandardTemplate from '~/components/UI/StandardTemplate'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: ${props => props.theme.spacing[40]};
  flex-direction: column;
  box-sizing: border-box;
`

const Message = styled.div`
  font-size: ${props => props.theme.fontSize.xxl};
  color: ${props => props.theme.colors.foreground400};
`

const ButtonContainer = styled.div`
  margin-top: ${props => props.theme.spacing[20]};
`


function ErrorPage() {
  return (
    <StandardTemplate>
      <Container>
        <Message>
        Sorry, address could not be found
        </Message>

        <ButtonContainer>
          <Link
            href={'/'}
          >
            <Button>
              Go back
            </Button>
          </Link>
        </ButtonContainer>
      </Container>
    </StandardTemplate>
  )
}

export default ErrorPage
