import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import Quote from "./reducers";

const middleware = applyMiddleware(thunk, createLogger());

const store = configureStore({ reducer: Quote }, middleware);

export default store;