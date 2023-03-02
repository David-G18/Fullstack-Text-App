import { configureStore } from '@reduxjs/toolkit'
// Redux Slice
import { textSlice } from '../reducer/textSlice'

const store = configureStore({
  reducer: textSlice.reducer
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
