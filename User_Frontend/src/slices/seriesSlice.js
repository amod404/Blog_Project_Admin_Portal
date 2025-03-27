import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    series: localStorage.getItem("series") ? JSON.parse(localStorage.getItem("series")) : [],   
    currentSeries: localStorage.getItem("currentSeries") ? JSON.parse(localStorage.getItem("currentSeries")) : null,
    loading: false,
}

const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        setSeries: (state, action) => {
            state.series = action.payload;
            localStorage.setItem("series", JSON.stringify(action.payload));
        },
        setCurrentSeries: (state, action) => {
            state.currentSeries = action.payload;
            localStorage.setItem("currentSeries", JSON.stringify(action.payload));
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
})

export const { setSeries, setCurrentSeries, setLoading } = seriesSlice.actions;
export default seriesSlice.reducer;