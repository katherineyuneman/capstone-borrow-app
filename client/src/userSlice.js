import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [], // user object
    loggedIn: false,
    status: "idle", // loading state
  };

  export const fetchUser = createAsyncThunk("user/fetchUser", () => {
    // return a Promise containing the data we want
    return fetch('/me')
        .then(resp => resp.json())
        .then((data)=> {console.log("data post /me fetch:", data); return data})
        
  });

  const userSlice = createSlice({
    name: "userName",
    initialState,
    reducers: {
        login(state, action) {
          // using createSlice lets us mutate state!
          if (Object.keys(action.payload).find(key => key==="errors") === "errors") {
            state.loggedIn = false
            state.status='rejected'
        } else {
              state.loggedIn = true
              state.value = [action.payload]
              state.status='succeeded'
          }
          
        },
        logout(state, action) {
            // using createSlice lets us mutate state!
            state.loggedIn = false
            state.value = {}
            state.status='succeeded'
          }
    },
      extraReducers: (builder) => {
          builder
          .addCase(fetchUser.pending, (state) => {
            state.status='loading'
          })
          .addCase(fetchUser.fulfilled, (state, action) => {
              console.log(Object.keys(action.payload).find(key => key==="errors"))
              if (Object.keys(action.payload).find(key => key==="errors") === "errors") {
                  state.loggedIn = false
                  state.status='rejected'
              } else {
                    state.loggedIn = true
                    state.value = action.payload
                    state.status='succeeded' 
                }
          })
          .addCase(fetchUser.rejected, (state, action) => {
              console.log("errors", action.payload.errors)
              if (action.payload.errors === 'Not authorized') {
            state.loggedIn = false
            state.status='rejected'
        }
          })
            
      }
    });

  export const { login, logout } = userSlice.actions
  export default userSlice.reducer;