import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import Button from '~/components/UI/Button'
import useOnClickOutside from '~/hooks/useOnClickOutside'
import { devices } from '~/styles/theme'
import { NFT } from '~/types'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(75px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageContainer = styled.div`
  width: 100%;
  min-width: 200px;
  flex-shrink: 0;
  aspect-ratio: 1;
  position: relative;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;

  & img {
    transition: transform 500ms ${props => props.theme.animation.default};
  }
`

const Modal = styled.div`
  overflow: hidden;
  width: 80vw;
  max-width: 800px;
  background: ${props => props.theme.colors.background500};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  padding: ${props => props.theme.spacing[20]};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
  }

  @media ${devices['sm<']} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: ${props => props.theme.spacing[30]};
  }
`

const Left = styled.div`
  margin-bottom: ${props => props.theme.spacing[20]};
  @media ${devices['sm<']} {
    margin-bottom: 0;
  }
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
`

const Collection = styled.div`
  font-size: ${props => props.theme.fontSize.default};
  font-weight: 600;
  color: ${props => props.theme.colors.foreground100};
  margin-bottom: ${props => props.theme.spacing[20]};
`

const Title = styled.div`
  font-size: ${props => props.theme.fontSize.xl};
  color: ${props => props.theme.colors.foreground800};
  margin-bottom: ${props => props.theme.spacing[20]};
  font-weight: 600;
`

const Description = styled.div`
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.colors.foreground200};
  margin-bottom: ${props => props.theme.spacing[20]};
`

const Owner = styled.div`
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.colors.foreground400};
  word-break: break-all;
`

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: ${props => props.theme.spacing[20]};
`

type Props = {
  onRequestClose: () => void;
  owner: string
} & NFT

function NftModal(props: Props) {
  const {
    onRequestClose,
    collection,
    description,
    floorPrice,
    openSeaUrl,
    title,
    tokenId,
    tokenType,
    contract: { name, symbol },
    owner,
  } = props

  const modalRef = React.useRef<HTMLDivElement>()


  function onClickOutside() {
    if (modalRef.current){
      console.log('on click outside', modalRef.current.parentElement)
    }
    onRequestClose()
  }

  React.useEffect(() => {
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'unset';
      }
    }
  }, [])


  useOnClickOutside(modalRef, onClickOutside)

  return (
    <Container>
      <Modal ref={modalRef}>
        <Left>
          <ImageContainer>
            <Image
              fill
              src={props.imageUrl}
              alt={props.title}
            />
          </ImageContainer>
        </Left>
        <Right>
          <Information>
            <Collection>{name}</Collection>
            <Title>{`${collection} ${title}`}</Title>
            {description && <Description>{description}</Description>}
            <Owner>owner: {owner}</Owner>
          </Information>
          <ButtonContainer>
            <Link
              href={openSeaUrl}
              target="_blank"
            >
              <Button>
                Buy on OpenSea
              </Button>
            </Link>
          </ButtonContainer>
        </Right>
      </Modal>
    </Container>
  )
}

export default NftModal
