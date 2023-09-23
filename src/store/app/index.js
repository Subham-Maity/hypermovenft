import { createSlice } from "@reduxjs/toolkit";

const initialAppState = {
  chainId: 137,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    setAppChainId(state, { payload }) {
      state.chainId = payload.chainId;
      return state;
    },
  },
});

// reterive actions
export const { setAppChainId } = appSlice.actions;

export default appSlice.reducer;
