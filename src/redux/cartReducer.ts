import { createSlice } from '@reduxjs/toolkit'

type CartType = {
    [id: number]: number
}

export const initialState: CartType = {
    1: 3,
    2: 3,
}

export const cartSlice = createSlice({
    name: 'productsInCart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => ({
            ...state,
            [action.payload.id]:
                (state[action.payload.id] || 0) + action.payload.count,
        }),
    },
})

export const { addProductToCart} = cartSlice.actions

export default cartSlice.reducer
