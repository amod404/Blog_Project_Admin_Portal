import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    content: localStorage.getItem("content") ? JSON.parse(localStorage.getItem("content")) : [],
    currentContent: localStorage.getItem("currentContent") ? JSON.parse(localStorage.getItem("currentContent")) : null,
}

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload;
            localStorage.setItem("content", JSON.stringify(action.payload));
        },
        setCurrentContent: (state, action) => {
            state.currentContent = action.payload;
            localStorage.setItem("currentContent", JSON.stringify(action.payload));
        },
    }
})

export const { setContent, setCurrentContent } = contentSlice.actions;
export default contentSlice.reducer;
