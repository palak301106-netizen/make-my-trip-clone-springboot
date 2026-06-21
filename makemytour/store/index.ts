import { configureStore, createSlice } from "@reduxjs/toolkit";

// Load user from localStorage
const getUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  }
  return null;
};

// Save user to localStorage
const saveUserToLocalStorage = (user: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

// Remove user from localStorage
const removeUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
};

const initialState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("setUSer payload:", action.payload);
      
      state.user = action.payload;
      saveUserToLocalStorage(action.payload);
    },

    clearUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;