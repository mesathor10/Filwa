import {configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../components/features/user/userSlice';
// import movieReducer from "./features/movie/movieSlice"
import movieReducer from '../components/features/movie/movieSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
        middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})