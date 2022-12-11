import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import backpackReducer from './backpackSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        backpack: backpackReducer
    },
    
})

export default store

