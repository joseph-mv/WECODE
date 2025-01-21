import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Uses localStorage by default
import { persistReducer, persistStore } from "redux-persist";
import uiReducer from "./reducers/uiReducer";
import userReducer from "./reducers/userReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Persist configuration for userReducer
const userPersistConfig = {
  key: "user",
  storage,
};

// Apply persist only to userReducer
const rootReducer = combineReducers({
  ui: uiReducer, // UI reducer (not persisted)
  user: persistReducer(userPersistConfig, userReducer), // Persisted user reducer
});

// Configure store
export const store = configureStore({
  reducer: rootReducer,
});

// Persistor for persisting the store
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for TypeScript usage
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
