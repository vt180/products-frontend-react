import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState }        from "./store";

const PRODUCTS_PER_PAGE = 20;

interface ApiResponse {
    content: Product[];
    page: {
        size: number;
        number: number;
        totalElements: number;
        totalPages: number;
    };

}

const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState
    dispatch: AppDispatch
    rejectValue: any
}>();

export const fetchProducts = createAppAsyncThunk(
    "products/fetchProducts",
    async (_, { getState }) => {
        try {
            const { pagination, subCategory, category, searchFieldValue } = getState().products;
            const start                                                   = Math.max(pagination.currentPage - 1, 0);

            let url = `http://127.0.0.1:8080/api/v1/products?page=${ start }&size=${ PRODUCTS_PER_PAGE }`;

            if (subCategory) {
                url += `&subCategory=${ subCategory }`;
            }

            if (category) {
                url += `&category=${ category }`;
            }

            if (searchFieldValue) {
                url += `&productTitle=${ searchFieldValue }`;
            }

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            const responseJson = (await response.json()) as ApiResponse;
            const totalItems   = responseJson.page.totalElements;
            const products     = responseJson.content;
            return { products, totalItems };
        } catch (error) {
            throw new Error("Error fetching products");
        }
    },
);

export interface ProductsState {
    data: Product[];
    loading: boolean;
    error: string | null | undefined;
    category: string | null | undefined;
    subCategory: string | null | undefined;
    searchFieldValue: string | null | undefined;
    pagination: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
    };
};

export interface Product {
    category: string;
    colour: string;
    gender: string;
    imageURL: string;
    productId: string;
    productTitle: string;
    productType: string;
    subCategory: string;
    usage: string;
}

const initialState: ProductsState = {
    data:             [],
    loading:          false,
    error:            null,
    category:         null,
    subCategory:      null,
    searchFieldValue: null,
    pagination:       {
        currentPage: 1,
        totalPages:  1,
        totalItems:  0,
    },
};


const productsSlice = createSlice({
    name:          "products",
    initialState,
    reducers:      {
        setCurrentPage:      (state, action) => {
            state.pagination.currentPage = action.payload;
        },
        setCategory:         (state, action) => {
            state.category = action.payload;
        },
        setSubCategory:      (state, action) => {
            state.subCategory = action.payload;
        },
        setSearchFieldValue: (state, action) => {
            state.searchFieldValue = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error   = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading               = false;
                state.data                  = action.payload.products;
                state.pagination.totalItems = action.payload.totalItems;
                state.pagination.totalPages =
                    Math.ceil(action.payload.totalItems / PRODUCTS_PER_PAGE);
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error   = action.error.message;
            });
    },
});

export const { setCurrentPage, setCategory, setSubCategory, setSearchFieldValue } = productsSlice.actions;

export default productsSlice.reducer;
