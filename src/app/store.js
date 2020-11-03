// import { compose } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import persistState from "redux-localstorage";
// import { reduxBatch } from '@manaflair/redux-batch'
import carReducer from "../features/car/carSlice";
import featuresReducer from "../features/addFeatures/featuresSlice";

// const enhancer = compose()

const rootReducer = combineReducers({
	car: carReducer,
	features: featuresReducer,
});

export default configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	enhancers: [persistState(),]
})