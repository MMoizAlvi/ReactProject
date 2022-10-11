const {createSlice} = require('@reduxjs/toolkit');

const formSlice = createSlice({
  name: 'form',
  initialState: false,
  reducers: {
    handleOpen(state, action){
      return state = action.payload
    },
    handleClose(state, action){
      return state = action.payload
    }
  }
});

export const{handleOpen, handleClose} = formSlice.actions;
export default formSlice.reducer;
