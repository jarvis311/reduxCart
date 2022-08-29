const { createSlice } = require("@reduxjs/toolkit");

const uiSlice = createSlice({
    name:'ui',
    initialState: { cardIsVisible : false},
    reducers: {
        toggle(state) {
            state.cardIsVisible = !state.cardIsVisible
        }
    }   
})


export const uiAction = uiSlice.actions
export default uiSlice