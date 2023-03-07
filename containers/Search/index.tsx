import { useRouter } from 'next/router'
import { transparentize } from 'polished'
import React from 'react'
import styled from 'styled-components'
import ApplicationHeader from '~/components/ApplicationHeader'
import SearchBar from '~/components/SearchBar'
import StandardTemplate from '~/components/UI/StandardTemplate'
import { inputValidator } from '~/pages/api/nfts'
import { devices } from '~/styles/theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`

const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 60%;

    @media ${devices['<md']} {
      width: 80%;
    }

    @media ${devices['<sm']} {
      width: 100%;
      padding-left: ${props => props.theme.spacing[40]};
      padding-right: ${props => props.theme.spacing[40]};
    }

    @media ${devices['<xs']} {
      width: 100%;
      padding-left: ${props => props.theme.spacing[20]};
      padding-right: ${props => props.theme.spacing[20]};
    }
`

const Message = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: ${props => props.theme.spacing[15]};
  font-size: ${props => props.theme.fontSize.default};
  color: ${props => transparentize(0.5, props.theme.colors.foreground100)};
  height: 20px;
  transition: color 0.5s ${props => props.theme.animation.default};

  &.error {
    color: ${props => props.theme.colors.red700};
  }
`

function Search() {
  const [value, setValue] = React.useState<string>()
  const [error, setError] = React.useState<string>()

  const router = useRouter()


  function onSubmit() {
    const errorMessage = inputValidator(value)

    if (errorMessage) {
      setError(errorMessage)
      return
    }

    router.push(`/nfts/${value}`)
  }

  // useEffect that resets the errorMessage once it was shown and the user changes the value
  React.useEffect(() => {
    if (!error) {
      return
    }

    setError(undefined)
  }, [value])

  return (
    <StandardTemplate>
      <Container>
        <SearchBarContainer>
          <SearchBar
            value={value}
            onSubmit={onSubmit}
            onChange={(value) => setValue(value)}
          />
          <Message className={error ? 'error' : ''}>
            {error || 'press enter to continue'}
          </Message>
        </SearchBarContainer>
      </Container>
    </StandardTemplate>
  )
}

export default Search
