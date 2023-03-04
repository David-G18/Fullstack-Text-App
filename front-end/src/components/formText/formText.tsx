import React, { useState, type ReactElement } from 'react'
// Hooks Redux Toolkit
import { useAppDispatch } from '../../redux/hooks/hooks'
// Actions
import { getAllTexts, newText } from '../../redux/actions/textsAction'
// Styles CSS
import './formText.css'

export default function FormText (): ReactElement {
  const [input, setInput] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (input?.length !== 0) {
      newText(input)
        .then(() => {
          setInput('')
          getAllTexts(dispatch)
        })
        .catch(error => { console.log(error) })
    }
  }

  return (
    <form className='formNewText' onSubmit={handleSubmit}>
      <textarea
        onChange={handleChange}
        value={input}
        name='input-text'
        placeholder='Escriba el texto que desea guardar'
      />
      <button>Guardar Texto</button>
    </form>
  )
}
