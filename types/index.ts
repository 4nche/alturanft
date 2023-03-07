export interface NFT {
  collection: string
  tokenId: string
  tokenType: string
  title: string
  description: string
  timeLastUpdated: string
  imageUrl?: string
  openSeaUrl: string
  floorPrice: number
  thumbnail?: string
}
