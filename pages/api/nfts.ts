import { OwnedNft, OwnedNftsResponse } from 'alchemy-sdk'
import { alchemy } from '~/server/utils/alchemy'
import { NFT } from '~/types'

interface ApiNftListResponse {
  data: NFT[]
}

function getImage(rawNft: OwnedNft): string | undefined {
  if (!rawNft.media.length) {
    return rawNft.contract.openSea?.imageUrl
  }

  let imageUrl = rawNft.media.length && rawNft.media[0].raw

  if (imageUrl.startsWith('ipfs')) {
    imageUrl = rawNft.media[0] && rawNft.media[0].gateway
  }

  if (!imageUrl.startsWith('https')) {
    return rawNft.contract.openSea?.imageUrl
  }

  return imageUrl
}

// ideally this should be a very robust function that checks input on malicious input,
// so that our api doesnt get hacked or abused
// due to time constraints I choose to keep it simple, but still showcase functionality
export function inputValidator(value?: string): string | undefined {
  if (!value) {
    return 'provide an .eth address'
  }

  if (value.includes(' ')) {
    return '.eth address is invalid'
  }
  if (!value.endsWith('.eth')) {
    return '.eth address is invalid '
  }

  return undefined
}

// return { error: { status: 500, data: { message: 'Failed because of reasons' } };


export default async function handler(req, res) {
  const { owner, original } = req.query


  if (!!inputValidator(owner)) {
    res.status(400).json({
      error: {
        status: 400,
        data: {
          message: 'owner parameter is invalid'
        }
      }
    })
    return
  }

  try {
    const nfts = await alchemy.nft.getNftsForOwner(owner)


    const mapped: NFT[] = !original && nfts.ownedNfts.map((nft) => {

      const nftFormatted: NFT = {
        collection: nft.contract.openSea.collectionName,
        tokenId: nft.tokenId,
        tokenType: nft.tokenType,
        description: nft.description,
        openSeaUrl: `https://opensea.io/assets/ethereum/${nft.contract.address}/${nft.tokenId}`,
        thumbnail: nft.media[0]?.thumbnail || nft.contract.openSea?.imageUrl,
        floorPrice: nft.contract.openSea.floorPrice,
        imageUrl: getImage(nft),
        timeLastUpdated: nft.timeLastUpdated,
        title: nft.title || nft.tokenId,
      }

      return nftFormatted
    })



    res.status(200).json({
      data: original ? nfts : mapped,
    })

  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: {
        status: 500,
        data: {
          message: 'something went wrong fetching nft data'
        }
      }
    })

    return
  }
}
