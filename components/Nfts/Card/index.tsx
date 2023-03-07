import Image, { ImageProps } from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { devices } from '~/styles/theme'
import { NFT } from '~/types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  aspect-ratio: 1 / 1.75;
  position: relative;
  background: ${props => props.theme.colors.background600};
  border-radius: ${props => props.theme.borderRadius.lg};
  align-items: flex-start;
  overflow: hidden;
`

const ImageContainer = styled.div`
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 1;
  position: relative;
  margin-bottom: ${props => props.theme.spacing[15]};
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: ${props => props.theme.spacing[15]};
  padding-right: ${props => props.theme.spacing[15]};
  width: 100%;
  box-sizing: border-box;
  overflow:hidden;
`

const Collection = styled.div`
  color: ${props => props.theme.colors.foreground300};
  font-size: ${props => props.theme.fontSize.sm};
  display: block;
  margin-bottom: ${props => props.theme.spacing[10]};
`

const Title = styled.div`
  color: ${props => props.theme.colors.foreground800};
  font-size: ${props => props.theme.fontSize.default};
  font-weight: 700;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
`

type Props = NFT

function NftCard(props: Props) {
  const { title, description, floorPrice, openSeaUrl, collection  } = props
  const [src, setSrc] = React.useState(props.imageUrl)

  const blurProps: Pick<ImageProps, 'placeholder' | 'blurDataURL'> = {
    placeholder: 'empty',
    blurDataURL: undefined
  }

  const sizes = `
    ${devices['xxs<']} 100vw
    ${devices['xs<']} 50vw
    ${devices['sm<']} 33vw
    ${devices['md<']} 25vw
    20vw
  `

  if (props.thumbnail) {
    blurProps.placeholder = 'blur';
    blurProps.blurDataURL = props.thumbnail
  }

  function onError() {
    setSrc('/static/images/img-placeholder.webp')
  }

  return (
    <Container>
      <ImageContainer>
        <Image
          {...blurProps }
          sizes={sizes}
          fill
          src={src}
          alt={props.title}
          style={{
            objectFit: 'contain',
            backgroundColor: '#f9f9f9',
          }}
          onError={onError}
        />
      </ImageContainer>
      <Information>
          <Collection>{collection}</Collection>
          <Title>{title}</Title>
      </Information>
    </Container>
  )
}

export default NftCard
