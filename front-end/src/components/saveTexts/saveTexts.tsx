import React, { type ReactElement, useEffect } from 'react'
// Hooks Redux Toolkit
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks'
// Actions
import { getAllTexts, deleteText } from '../../redux/actions/textsAction'
// Style CSS
import './saveTexts.css'

export default function SaveTexts (): ReactElement {
  const texts = useAppSelector(state => state.texts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getAllTexts(dispatch)
  }, [])

  const handleClick = (id: string): void => {
    deleteText(id)
      .then(() => { getAllTexts(dispatch) })
      .catch(error => { console.log(error) })
  }

  return (
    <div className='saveTexts-container'>
      <h2>Textos Guardados</h2>

      <div className='save-texts'>
        {(texts.length > 0)
          ? texts.map((text, i) => {
            return (
            <div key={i} className='text-card'>
              <div className='aditional-content'>
                <button onClick={() => { handleClick(text.id) }}>X</button>
                <span>{text.date.toString()}</span>
              </div>
              <p>{text.description}</p>
            </div>
            )
          })
          : 'No hay textos'}
      </div>

    </div>
  )
}
