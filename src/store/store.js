import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productsSlice';
import commentReducer  from './slices/commentsSlice';
import formReducer from './slices/formSlice';
import searchReducer from './slices/searchSlice';
import searchProductReducer from './slices/searchProductSlice'

const store = configureStore({
    reducer: {
        product: productReducer,
        comment: commentReducer,
        form: formReducer,
        search: searchReducer,
        searchProduct: searchProductReducer,
    },
});

export default store;
