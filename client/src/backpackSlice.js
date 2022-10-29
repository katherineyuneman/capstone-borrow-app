import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [], // user object
    maxBooks: 3,
    atLimit: false,
    status: "idle", // loading state
  };

  export const fetchBackpack = createAsyncThunk("backpack/fetchBackpack", (rentalMonth) => {
    // return a Promise containing the data we want
    return fetch(`/rentals/${rentalMonth}`)
        .then(resp => resp.json())
        .then((data)=> {console.log("data post /rentals fetch:", data); return data})
        
  });

  const backpackSlice = createSlice({
    name: "backpack",
    initialState,
    reducers: {
        determineLimit(state, action) {
          console.log(action.payload)
          // using createSlice lets us mutate state!
        //   if (Object.keys(action.payload).find(key => key==="errors") === "errors") {
        //     state.status='rejected'
        // } else {
        //       state.loggedIn = true
        //       state.value = [action.payload]
        //       state.status='succeeded'
        //   }
          
        }
        // ,
        // logout(state, action) {
        //     // using createSlice lets us mutate state!
        //     state.loggedIn = false
        //     state.value = {}
        //     state.status='succeeded'
        //   }
    },
      extraReducers: (builder) => {
          builder
          .addCase(fetchBackpack.pending, (state) => {
            state.status='loading'
          })
          .addCase(fetchBackpack.fulfilled, (state, action) => {
              console.log(Object.keys(action.payload).find(key => key==="errors"))
              if (Object.keys(action.payload).find(key => key==="errors") === "errors") {
                  state.status='rejected'
              } else {
                if (action.payload.length < state.maxBooks){
                    state.value = action.payload
                    state.atLimit = false
                    state.status='succeeded' 
                  } else {
                    state.value = action.payload
                    state.atLimit = true
                    state.status = 'succeeded'
                  }
                }
          })
          .addCase(fetchBackpack.rejected, (state, action) => {
              console.log("errors", action.payload.errors)
              if (action.payload.errors === 'Not authorized') {
            state.status='rejected'
        }
          })
            
      }
    });

  export const { determineLimit } = backpackSlice.actions
  export default backpackSlice.reducer;