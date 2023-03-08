import Image, { ImageProps } from 'next/image'
import { transparentize } from 'polished'
import React from 'react'
import styled from 'styled-components'
import Eth from '~/components/Icons/Eth'
import { devices } from '~/styles/theme'
import { NFT } from '~/types'

const ImageContainer = styled.div`
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 1;
  position: relative;
  margin-bottom: ${props => props.theme.spacing[15]};
  border-radius: ${props => props.theme.borderRadius.lg} ${props => props.theme.borderRadius.lg} 0 0;
  overflow: hidden;

  & img {
    transition: transform 500ms ${props => props.theme.animation.default};
  }
`

const Information = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-left: ${props => props.theme.spacing[15]};
  padding-right: ${props => props.theme.spacing[15]};
  padding-bottom: ${props => props.theme.spacing[15]};
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
  margin-bottom: ${props => props.theme.spacing[20]};
`

const FloorPrice = styled.div`
  color: ${props => props.theme.colors.foreground400};
  font-size: ${props => props.theme.fontSize.default};
  display: block;
  text-align: right;
`

const TokenTypeTooltip = styled.div`
  position: absolute;
  background-color: ${props => props.theme.colors.background100};
  padding: ${props => props.theme.spacing[5]};
  z-index: 101;
  top: -28px;
  left: 0;
  font-size: ${props => props.theme.fontSize.xs};
  border-radius: ${props => props.theme.borderRadius.default};
  left: -50%;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 500ms ${props => props.theme.animation.default};
`

const TokenType = styled.div`
  border-radius: 100em;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index:99;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  background-color: ${props => transparentize(0.75, props.theme.colors.background100)};
  transition:
    background-color 500ms ${props => props.theme.animation.default},
    opacity 500ms ${props => props.theme.animation.default};

  & svg {
    fill: rgba(255,255,255,0.4);
    transition: fill 500ms ${props => props.theme.animation.default};
  }

  &:hover {
    transition: background-color 1000ms ${props => props.theme.animation.default};
    background-color: ${props => transparentize(0.4, props.theme.colors.background100)};

    ${TokenTypeTooltip} {
      opacity: 1;
    }

    svg {
      fill: rgba(255,255,255,1);
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width:0;
  width: 100%;
  position: relative;
  background: ${props => props.theme.colors.background500};
  border-radius: ${props => props.theme.borderRadius.lg};
  align-items: flex-start;
  cursor: pointer;
  transition-property: transform, background-color;
  transition-duration: 500ms;
  transition-timing-function: ${props => props.theme.animation.default};

  @media ${devices['xxs<']} {
    min-height: 480px;
  }

  @media ${devices['xs<']} {
    min-height: 320px;
  }

  @media ${devices['sm<']} {
    min-height: 340px;
  }

  @media ${devices['md<']} {
    min-height: 360px;
  }
  @media ${devices['lg<']} {
    min-height: 400px;
  }

  &:hover {
    background: ${props => props.theme.colors.background200};
    transform: translateY(-1px);
  }

  &:hover ${TokenType} {
    opacity: 1
  }

  &:hover ${ImageContainer} img {
    transform: scale(1.05);
  }
`

type Props = {
  onClick: () => void
} & NFT

function NftCard(props: Props) {
  const {
    title,
    description,
    floorPrice,
    openSeaUrl,
    collection,
    tokenType,
    contract
  } = props
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
    <Container
      onClick={props.onClick}
    >
      <TokenType>
        <TokenTypeTooltip>
          {tokenType}
        </TokenTypeTooltip>
        <Eth />
      </TokenType>
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
          <div>
            <Collection>{contract.name}</Collection>
            <Title>{title}</Title>
          </div>
          <div>
            {!!floorPrice && (
              <FloorPrice>
                {`${floorPrice} ETH`}
              </FloorPrice>
            )}
          </div>
      </Information>
    </Container>
  )
}

export default NftCard
