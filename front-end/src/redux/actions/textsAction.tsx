import axios from 'axios'
// Actions Reducers
import { setTexts } from '../reducer/textSlice'
// Types
import type { Text } from '../../types/type'
import type { AppDispatch } from '../store/store'

export const getAllTexts = (dispatch: AppDispatch): void => {
  axios.get<Text[]>('http://localhost:3001/texts')
    .then(res => dispatch(setTexts(res.data)))
    .catch(error => { console.log(error) })
}
