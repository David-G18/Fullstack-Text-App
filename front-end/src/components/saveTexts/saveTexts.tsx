import React, { useEffect, type ReactElement } from 'react'
// Hooks Redux Toolkit
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks'
// Actions
import { getAllTexts } from '../../redux/actions/textsAction'
// Style CSS
import './saveTexts.css'

export default function SaveTexts (): ReactElement {
  const texts = useAppSelector(state => state.texts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getAllTexts(dispatch)
  }, [])

  return (
    <div className='saveTexts-container'>
      <h2>Textos Guardados</h2>

      <div className='save-texts'>
        {(texts.length > 0)
          ? texts.map((text, i) => {
            return (
            <div key={i} className='text-card'>
              <span>{text.date.toString()}</span>
              <p>{text.description}</p>
            </div>
            )
          })
          : 'No hay textos'}
      </div>

    </div>
  )
}
