import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities: {}, // user object
    status: "idle", // loading state
  };

  export const fetchUser = createAsyncThunk("user/fetchUser", () => {
    // return a Promise containing the data we want
    return fetch('/me')
        .then(resp => resp.json())
        .then((data)=> {
            if (data.errors) {
                // setLoginErrors(data.errors)
                // setLoggedIn(false)
            } else {
            console.log(data)
            }
        })
  });

  const userSlice = createSlice({
    name: "user",
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
      extraReducers: {
          [fetchUser.fulfilled](state, action){
              state.entities = action.payload;
              state.status = "idle";
          }
      }
    },
  });
  
  export default userSlice.reducer;