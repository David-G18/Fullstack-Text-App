// Redux Toolkit
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// Types
import type { TextState, Text } from '../../types/type'

// Define the initial state using that type
const initialState: TextState = {
  texts: []
}

export const textSlice = createSlice({
  // A name, used in action types:
  name: 'texts',
  // The initial state:
  initialState,
  // An object of "case reducers".
  // Key names will be used to generate actions:
  reducers: {
    setTexts: (state, action: PayloadAction<Text[]>) => {
      state.texts = action.payload
    }
  }
})

export const { setTexts } = textSlice.actions

export default textSlice.reducer
