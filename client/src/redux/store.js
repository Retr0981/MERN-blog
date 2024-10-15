import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userSlice.js'
import { persistedReducer } from 'react-persist'
import { version } from 'mongoose';


const rootReducer = combineReducers({
    user: userReducer
});


const persistConfig = {
    key: 'root',
    storage, 
    version: 1,
};



const persistedReducer = persistedReducer(persistConfig, rootReducer)




export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddlwware) => getDefaultMiddlwware({serializableCheck:false,}
  ),
});



export const persistor = persistStore(store);