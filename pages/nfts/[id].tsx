import { GetServerSideProps, GetServerSidePropsResult } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { getRunningQueriesThunk, nftsApi, useGetNftsByOwnerQuery } from '~/client/services/nfts'
import NftCard from '~/components/Nfts/Card'
import PageHeader from '~/components/UI/PageHeader'
import StandardTemplate from '~/components/UI/StandardTemplate'
import { inputValidator } from '~/pages/api/nfts'
import { wrapper } from '~/state/store'
import { devices } from '~/styles/theme'

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

  if (error) {
    return 'error'
  }


  return (
    <StandardTemplate>
      <Container>
        <PageHeader>{owner}</PageHeader>
        <Grid>
          {data?.data && data.data.map(nft => (
            <NftCard key={`${nft.collection}-${nft.tokenId}`} {...nft} />
          ))}
        </Grid>
      </Container>
    </StandardTemplate>
  )
}

export default Nfts
