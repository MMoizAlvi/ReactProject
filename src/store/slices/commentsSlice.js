import { STATUSES } from '../apiStatus';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setComments, setStatus } = commentSlice.actions;
export default commentSlice.reducer;

export const fetchComments = createAsyncThunk('comments/fetch', async (productId) => {
    const res = await fetch(`http://localhost:3000/products/${productId}/comments`);
    const data = await res.json();
    return data;
});
