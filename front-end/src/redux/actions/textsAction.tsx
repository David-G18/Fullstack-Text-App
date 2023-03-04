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

export const newText = async (payload: string): Promise<void> => {
  await axios.post('http://localhost:3001/texts', {
    description: payload,
    date: new Date()
  })
    .catch(error => { console.log(error) })
}

export const deleteText = async (payload: string): Promise<void> => {
  await axios.delete(`http://localhost:3001/texts/${payload}`)
    .catch(error => { console.log(error) })
}
