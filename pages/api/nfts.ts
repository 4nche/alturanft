import { NFT } from '~/types'

interface ApiNftListResponse {
  data: NFT[]
}

export default function handler(req, res) {

  const data: ApiNftListResponse['data'] = [
    {
      id: 'x_1',
      imageUrl: 'https://i.seadn.io/gae/Xx1GEQzegQYee9mf0kexRG2rCQb18nXzufhguFMn5enWeeC-Il4n2Jk-iF9oGhu_lyOOxb3xCxC7Kdb8jAE4zUCjwMX-Nf9iY2kaOg',
      lastSalePrice: '0.899',
      name: 'BAYC 1993',
      price: '79',
      purchaseUrl: 'https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1993'
    },
    {
      id: 'x_2',
      imageUrl: 'https://i.seadn.io/gae/Xx1GEQzegQYee9mf0kexRG2rCQb18nXzufhguFMn5enWeeC-Il4n2Jk-iF9oGhu_lyOOxb3xCxC7Kdb8jAE4zUCjwMX-Nf9iY2kaOg',
      lastSalePrice: '0.899',
      name: 'BAYC 1993',
      price: '79',
      purchaseUrl: 'https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1993'
    },
    {
      id: 'x_3',
      imageUrl: 'https://i.seadn.io/gae/Xx1GEQzegQYee9mf0kexRG2rCQb18nXzufhguFMn5enWeeC-Il4n2Jk-iF9oGhu_lyOOxb3xCxC7Kdb8jAE4zUCjwMX-Nf9iY2kaOg',
      lastSalePrice: '0.899',
      name: 'BAYC 1993',
      price: '79',
      purchaseUrl: 'https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1993'
    },
    {
      id: 'x_3',
      imageUrl: 'https://i.seadn.io/gae/Xx1GEQzegQYee9mf0kexRG2rCQb18nXzufhguFMn5enWeeC-Il4n2Jk-iF9oGhu_lyOOxb3xCxC7Kdb8jAE4zUCjwMX-Nf9iY2kaOg',
      lastSalePrice: '0.899',
      name: 'BAYC 1993',
      price: '79',
      purchaseUrl: 'https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1993'
    },
    {
      id: 'x_4',
      imageUrl: 'https://i.seadn.io/gae/Xx1GEQzegQYee9mf0kexRG2rCQb18nXzufhguFMn5enWeeC-Il4n2Jk-iF9oGhu_lyOOxb3xCxC7Kdb8jAE4zUCjwMX-Nf9iY2kaOg',
      lastSalePrice: '0.899',
      name: 'BAYC 1993',
      price: '79',
      purchaseUrl: 'https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1993'
    }
  ]

  res.status(200).json({ data })
}
