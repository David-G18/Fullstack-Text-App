import React, { useState, type ReactElement } from 'react'
import axios from 'axios'
// Hooks Redux Toolkit
import { useAppDispatch } from '../../redux/hooks/hooks'
// Actions
import { getAllTexts } from '../../redux/actions/textsAction'
// Styles CSS
import './formText.css'

export default function FormText (): ReactElement {
  const [input, setInput] = useState<string>()
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if ((input?.length) != null) {
      axios.post('http://localhost:3001/texts', {
        description: input,
        date: new Date()
      })
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
