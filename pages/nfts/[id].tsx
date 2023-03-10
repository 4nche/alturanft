import { GetServerSideProps, GetServerSidePropsResult } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { getRunningQueriesThunk, nftsApi, useGetNftsByOwnerQuery } from '~/client/services/nfts'
import ArrowLeft from '~/components/Icons/ArrowLeft'
import Portal from '~/components/Portal'
import NftCard from '~/components/Nfts/Card'
import Button, { ButtonStyle } from '~/components/UI/Button'
import PageHeader from '~/components/UI/PageHeader'
import StandardTemplate from '~/components/UI/StandardTemplate'
import ErrorPage from '~/containers/ErrorPage'
import NftModal from '~/containers/NftModal/Index'
import { inputValidator } from '~/pages/api/nfts'
import { wrapper } from '~/state/store'
import { devices } from '~/styles/theme'
import { NFT } from '~/types'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: ${props => props.theme.spacing[20]};
  flex-direction: column;
  box-sizing: border-box;
`

const Grid = styled.div`
  display: grid;
  column-gap: ${props => props.theme.spacing[10]};
  row-gap: ${props => props.theme.spacing[10]};

  @media ${devices['<xxl']} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  @media ${devices['<xl']} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media ${devices['<lg']} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media ${devices['<md']} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${devices['<sm']} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${devices['<xs']} {
    grid-template-columns: 1fr;
  }

  @media ${devices['<xxs']} {
    grid-template-columns: 1fr;
  }
`

const GoBack = styled.div`
  width: 20px;
  height: 20px;
  margin-right: ${props => props.theme.spacing[20]};
  margin-top: 5px;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 ${props => props.theme.spacing[30]} 0;
`

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
      async ({ req, params }) => {
        store.dispatch(nftsApi.endpoints.getNftsByOwner.initiate(params.id as string) as any)
        await Promise.all(store.dispatch(getRunningQueriesThunk() as any))
        return {
          props: {
            owner: params.id as string,
          }
        }
      }
)


interface Props {
  owner?: string
}



function Nfts(props: Props) {
  const { owner } = props
  const { data, error, isLoading } = useGetNftsByOwnerQuery(owner)
  const [nft, setNft] = React.useState<NFT>()
  const [modalVisible, setModalVisible] = React.useState(false)

  React.useEffect(() => {
    setModalVisible(!!nft)
  }, [nft])

  if (error) {
    return <ErrorPage />
  }

  function onClick(nft: NFT) {
    setNft(nft)
  }

  function onRequestCloseModal() {
    if (!nft) {
      return
    }

    setNft(undefined)
  }

  function getPageContent(): React.ReactNode {
    if (isLoading) {
      return 'loading'
    }

    if (data?.data) {
      return (
        <>
          {nft && (
            <Portal>
              <NftModal
                owner={owner}
                onRequestClose={onRequestCloseModal}
                {...nft}
              />
            </Portal>
          )}
          <HeaderContainer>
            <Button buttonStyle={ButtonStyle.ContentOnly}>
              <Link href="/">
                <GoBack>
                  <ArrowLeft />
                </GoBack>
              </Link>
            </Button>
            <PageHeader>{owner}</PageHeader>
          </HeaderContainer>

          <Grid>
            {data.data.map(nft => (
              <NftCard
                onClick={() => onClick(nft)}
                key={`${nft.collection}-${nft.tokenId}`}
                {...nft}
              />
            ))}
          </Grid>
        </>
      )
    }
  }

  return (
    <StandardTemplate>
      <Container>
        {getPageContent()}
      </Container>
    </StandardTemplate>
  )
}

export default Nfts
