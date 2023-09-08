import { configureStore } from "@reduxjs/toolkit";
import * as reducer from './reducers'

export const Store = configureStore({
  reducer,
});
