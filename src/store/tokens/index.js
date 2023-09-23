import { createSlice } from "@reduxjs/toolkit";

const initialAppState = {
  tokens: {},
};

const tokensSlice = createSlice({
  name: "tokens",
  initialState: initialAppState,
  reducers: {
    setTokens(state, { payload }) {
      state.tokens = payload.tokens;
      return state;
    },
  },
});

// reterive actions
export const { setTokens } = tokensSlice.actions;

export default tokensSlice.reducer;
