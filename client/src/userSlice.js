import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {}, // user object
    status: "idle", // loading state
  };

  export const fetchUser = createAsyncThunk("user/fetchUser", () => {
    // return a Promise containing the data we want
    return fetch('/me')
        .then(resp => resp.json())
        .then((data)=> {return data})
            // if (data.errors) {
            //     // setLoginErrors(data.errors)
            //     // setLoggedIn(false)
            // } else {
            // data
            // }
        
  });

  const userSlice = createSlice({
    name: "userName",
    initialState,
    reducers: {
    //   userSignedIn(state, action) {
    //     // using createSlice lets us mutate state!
    //     state.entities.push(action.payload);
    //   },
    //   catUpdated(state, action) {
    //     const cat = state.entities.find((cat) => cat.id === action.payload.id);
    //     cat.url = action.payload.url;
    //   },
    },
      extraReducers: (builder) => {
          builder
          .addCase(fetchUser.pending, (state) => {
            state.status='loading'
          })
          .addCase(fetchUser.fulfilled, (state, action) => {
            state.value = action.payload
            state.status='succeeded'
          })
          .addCase(fetchUser.rejected, (state) => {
            state.status='rejected'
          })
            
      }
    });

  
  export default userSlice.reducer;