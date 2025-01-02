import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState: {
        authUser: null,
    },
    reducers:{
        //actions
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        }
    }
});

export const {setAuthUser} = userSlice.actions;
export default userSlice.reducer;