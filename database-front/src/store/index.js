import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer} from "./slices/selectedCharacter"

export const store = configureStore({
  reducer: {
  },
});