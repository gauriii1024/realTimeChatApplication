import { createSlice } from "@reduxjs/toolkit"

const messageSlice = createSlice({
    name: "message",
    initialState: {
        messages: [],
    },
    reducers: {
        setMessages: (state, action) => {
            const newMessages = action.payload.filter(newMessage =>
                !state.messages.some(existingMessage => existingMessage._id === newMessage._id)
            );
            state.messages = [...state.messages, ...newMessages];
        },
        resetMessages: (state) => {
            state.messages = [];
        },
    }
})

export const { setMessages, resetMessages } = messageSlice.actions;
export default messageSlice.reducer;