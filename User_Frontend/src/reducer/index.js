import { combineReducers } from "@reduxjs/toolkit"

import seriesReducer from "../slices/seriesSlice"
import contentReducer from "../slices/contentSlice"

const rootReducer = combineReducers({
    series: seriesReducer,
    content: contentReducer
})

export default rootReducer