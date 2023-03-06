import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "~/state/store";
import { NFT } from "~/types";

interface NftsState {
  data: NFT[]
}

export const nftsSlice = createSlice({
  initialState: {
    data: [] as NFT[]
  },
  name: 'nfts',
  reducers: {
    setNfts(state: NftsState, { payload = []}: PayloadAction<NFT[]>) {
      state.data = payload
    }
  }
})
