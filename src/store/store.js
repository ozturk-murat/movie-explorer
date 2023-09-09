import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/movies.reducer';

const store = configureStore({
  reducer,
});

export default store;