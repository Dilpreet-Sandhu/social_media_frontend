import { createSlice } from "@reduxjs/toolkit";

interface User  {

    user : {
        username : string,
        email : string,
        password : string,
        avatar : string,
        following : string[],
        followers : string[],
        blockedUsers : string[],
        avatarPublicId : string,
        isPrivate : string,
        tags : string []
    } | undefined | null;
};

const initialState : User = {

    user : null,
    
}



const userSlice = createSlice({
    name : "user slice",
    initialState,
    reducers : {
        userLogin : (state,action) => {
            state.user = action.payload;
        },
        userLogout : (state) => {
            state.user = null;
        }
    }
});

export const {userLogin,userLogout } = userSlice.actions;
export default userSlice;