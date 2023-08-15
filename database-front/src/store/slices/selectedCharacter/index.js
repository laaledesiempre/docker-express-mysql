import { createSlice, current } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "Characters",
  initialState: {
    selectedCharacter:""
  },
  reducers: {
    changeCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
    },

  },
});

export const { changeCharacter} = filtersSlice.actions;

export const charactersReducer = filtersSlice.reducer;

export const updateCharacter = (character) => (dispatch) => {
  dispatch(changeCharacter(character))
}
