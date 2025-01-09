import { createSlice } from "@reduxjs/toolkit"

const messageSlice = createSlice({
    name: "message",
    initialState: {
        messages: null,
    },
    reducers: {
        setMessages: (state, action) => {
            const newMessages = action.payload.filter(newMessage =>
                !state.messages.some(existingMessage => existingMessage._id === newMessage._id)
            );
            state.messages = [...state.messages, ...newMessages];
        },
        addMessage: (state, action) => {
            state.messages = [...state.messages, action.payload];
        },
        resetMessages: (state) => {
            state.messages = [];
        },
    }
})

export const { setMessages, resetMessages , addMessage } = messageSlice.actions;
export default messageSlice.reducer;