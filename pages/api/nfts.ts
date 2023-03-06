import { alchemy } from '~/server/utils/alchemy'
import { NFT } from '~/types'

interface ApiNftListResponse {
  data: NFT[]
}

export default async function handler(req, res) {
  const { owner } = req.query

  if (!owner) {
    res.status(400).json({
      error: 'no_owner',
      description: 'missing owner parameter',
    })
    return
  }

  try {
    const nfts = await alchemy.nft.getNftsForOwner(owner)

    const mapped: NFT[] = nfts.ownedNfts.map((nft) => {
      const nftFormatted: NFT = {
        tokenId: nft.tokenId,
        description: nft.description,
        openSeaUrl: `https://opensea.io/assets/ethereum/${nft.contract.address}/${nft.tokenId}`,
        floorPrice: nft.contract.openSea.floorPrice,
        imageUrl: nft.rawMetadata.image_url || nft.media[0].gateway,
        tokenType: nft.tokenType,
        timeLastUpdated: nft.timeLastUpdated,
        title: nft.title,
      }

      return nftFormatted
    })

    res.status(200).json({
      data: mapped,
    })

  } catch (e) {
    res.status(500).json({
      error: 'internal_server_error',
      description: 'something went wrong fetching nft data'
    })

    return
  }
}
