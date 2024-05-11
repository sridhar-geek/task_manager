import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Imports from anthor files
import taskReducer from "./Task_Slice"


// creating persistor with local storage
const persistConfig = {
    key: "root",
    storage,
}

// adding task_slice to persistor
const rootReducer = combineReducers({
  task: taskReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Global store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// exporting persistor with store init
export const persistor = persistStore(store)

