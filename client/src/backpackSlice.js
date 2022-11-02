import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [], // user object
    maxBooks: 3,
    atLimit: false,
    confirmed: false,
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
        updateConfirmed(state, action) {
          console.log(action.payload)
          state.confirmed = true
          // using createSlice lets us mutate state!
        //   if (Object.keys(action.payload).find(key => key==="errors") === "errors") {
        //     state.status='rejected'
        // } else {
        //       state.loggedIn = true
        //       state.value = [action.payload]
        //       state.status='succeeded'
        //   }
          
        }, removeConfirmed(state, action) {
          console.log(action.payload)
          if (state.confirmed === true){
          state.confirmed = false
        }
    },
    },
      extraReducers: (builder) => {
          builder
          .addCase(fetchBackpack.pending, (state) => {
            state.status='loading'
          })
          .addCase(fetchBackpack.fulfilled, (state, action) => {
              if (Object.keys(action.payload).find(key => key==="error") === "error") {
                  state.status='rejected'
                  state.value= []
                  state.atLimit= false
              } else {
                if (action.payload.length < state.maxBooks){
                    state.value = action.payload
                    state.atLimit = false
                    state.status='succeeded' 
                    if (action.payload.length > 1){
                    state.confirmed = action.payload[0].confirmed
                  }
                  } else {
                    state.value = action.payload
                    state.atLimit = true
                    state.status = 'succeeded'
                    state.confirmed = action.payload[0].confirmed
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

  export const { updateConfirmed, removeConfirmed } = backpackSlice.actions
  export default backpackSlice.reducer;