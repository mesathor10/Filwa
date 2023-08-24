import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    recommend: null,
    newFilwa: null,
    original: null,
    trending: null, 
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.newFilwa = action.payload.newFilwa;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        }
    }
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = state => state.movie.recommend
export const selectNewFilwa = state => state.movie.newFilwa
export const selectOriginals = state => state.movie.original
export const selectTrending = state => state.movie.trending

export default movieSlice.reducer