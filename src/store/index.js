import { configureStore } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";

// reducers
import app from "./app";
import tokens from "./tokens";

const PERSISTED_KEYS = ["app", "tokens"];

const store = configureStore({
  reducer: {
    app,
    tokens,
  },
  middleware: [save({ states: PERSISTED_KEYS, namespace: "testnet" })],
  preloadedState: load({
    states: PERSISTED_KEYS,
    namespace: "testnet",
  }),
  devTools: true,
});

export default store;
