const { createSlice } = require("@reduxjs/toolkit");

const uiSlice = createSlice({
    name:'ui',
    initialState: { cardIsVisible : false, notification:null},
    reducers: {
        toggle(state) {
            state.cardIsVisible = !state.cardIsVisible
        },
        showNotification(state, action){
            state.notification = { status: action.payload.status, title:action.payload.title, message:action.payload.message}
        }
    }   
})


export const uiAction = uiSlice.actions
export default uiSlice