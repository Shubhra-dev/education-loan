import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const FIVE_MINUTES = 5 * 60 * 1000;

// Load initial state from cookies if session is still valid
const loadStateFromCookies = () => {
  const savedState = Cookies.get("authStateEducation")
    ? JSON.parse(Cookies.get("authStateEducation"))
    : null;
  const lastActivityTime = Cookies.get("lastActivityTimeEducation");

  if (savedState && lastActivityTime) {
    const currentTime = new Date().getTime();
    const timeGap = currentTime - parseInt(lastActivityTime, 10);

    if (timeGap < FIVE_MINUTES) {
      // Update `inTime` to the latest time
      savedState.inTime = currentTime;
      Cookies.set("authStateEducation", JSON.stringify(savedState), {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("lastActivityTimeEducation", currentTime, {
        secure: true,
        sameSite: "Strict",
      });
      return savedState;
    }
  }

  // Return default state if session is invalid or expired
  return {
    isLoggedIn: false,
    userToken: "",
    userName: "",
    inTime: "",
    profileImage: "",
  };
};

const initialState = loadStateFromCookies();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.userToken = action.payload.token;
      state.userName = action.payload.name;
      state.profileImage = action.payload.profileImage;
      state.inTime = new Date().getTime();

      // Save login state and time to cookies
      Cookies.set("authStateEducation", JSON.stringify(state), {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("lastActivityTimeEducation", state.inTime, {
        secure: true,
        sameSite: "Strict",
      });
    },
    profileImageChange: (state, action) => {
      state.profileImage = action.payload;
      state.inTime = new Date().getTime();
      console.log(action.payload);
      // Update cookies with the new profile image and time
      Cookies.set("authStateEducation", JSON.stringify(state), {
        secure: true,
        sameSite: "Strict",
      });
      Cookies.set("lastActivityTimeEducation", state.inTime, {
        secure: true,
        sameSite: "Strict",
      });
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.userToken = "";
      state.profileImage = "";
      state.userName = "";
      state.inTime = "";

      // Remove cookies
      Cookies.remove("authStateEducation");
      Cookies.remove("lastActivityTimeEducation");
    },
  },
});

export const { logIn, logOut, profileImageChange } = authSlice.actions;
export default authSlice.reducer;
