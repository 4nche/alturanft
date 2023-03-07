import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import { NFT } from '~/types'

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://alturanft.vercel.app';

// Define a service using a base URL and expected endpoints
export const nftsApi = createApi({
  reducerPath: 'owner_nfts',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/api/` }),
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getNftsByOwner: builder.query<{ data: NFT[] }, string>({
      query: (owner) => `nfts?owner=${owner}`,
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetNftsByOwnerQuery,
  util: { getRunningQueriesThunk },
}  = nftsApi
