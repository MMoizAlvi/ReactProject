const {createSlice} = require('@reduxjs/toolkit');

const searchSlice = createSlice({
  name: 'search',
  initialState: null,
  reducers: {
    setSearch(state, action){
      return state = action.payload
    }
  }
});

export const{setSearch} = searchSlice.actions;
export default searchSlice.reducer;
