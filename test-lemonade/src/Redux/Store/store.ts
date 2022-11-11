import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "../Reducers/timeReducer";
import intervalReducer from "../Reducers/intervalReducer";

export default configureStore({
  reducer: {
    timeState: timeReducer,
    intervalState: intervalReducer,
  },
});
