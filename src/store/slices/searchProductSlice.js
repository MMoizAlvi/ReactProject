import { STATUSES } from '../apiStatus';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const searchProductSlice = createSlice({
    name: 'searchProduct',
       initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchSearchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchSearchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setSearchProduct } = searchProductSlice.actions;
export default searchProductSlice.reducer;

export const fetchSearchProducts = createAsyncThunk('searchProducts/fetch', async (search) => {
    const res = await fetch(`http://localhost:3000/products?utf8=%E2%9C%93&name=${search}&commit=Search`);
    const data = await res.json();
    return data;
});
