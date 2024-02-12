import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './reducer/reducers';

const store = configureStore({
  reducer: mainReducer,
});
export default store;
