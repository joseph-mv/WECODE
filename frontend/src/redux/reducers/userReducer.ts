import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  googleId?: string;
  name?: string;
  email?: string;
  avatar?: string;
  createdAt?: string;
  subscriptionType?: "free" | "premium";
}

interface UserState {
  user: User; // Wrap the user object inside the state
}

const initialState: UserState = {
  user: {}, // Initialize user as an empty object
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
        console.log(action.payload)
     state.user=action.payload // Updates user properties
    },
    clearUser: (state) => {
      state.user={}
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
