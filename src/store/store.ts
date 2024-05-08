import { configureStore, Store  } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './reducers/rootReducer';

const store: Store<RootState> = configureStore({
  reducer: rootReducer,
});

export default store;