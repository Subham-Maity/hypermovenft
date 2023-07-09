import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistReducer,
  REHYDRATE,
  PERSIST,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducers
import app from "./app";

const rootReducer = combineReducers({
  app,
});

const store = configureStore({
  reducer: persistReducer<ReturnType<typeof rootReducer>>(
    {
      key: "root",
      storage,
      blacklist: ["app"],
    },
    rootReducer
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST],
      },
    }),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
