import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { getPersistConfig } from 'redux-deep-persist';
import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteReducer';

const preloadedState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const persistConfig = getPersistConfig({
  key: 'root',
  storage: storage,
  whitelist: ['contacts.items'],
  rootReducer: () => noteReducer,
});

const persistedReducer = persistReducer(persistConfig, noteReducer);

// export const store = createStore(persistedReducer, preloadedState);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  preloadedState,
});

export const persistor = persistStore(store);
