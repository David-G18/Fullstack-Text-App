import React, { type ReactElement } from 'react'
// Components
import FormText from '../formText/formText'
import SaveTexts from '../saveTexts/saveTexts'
// Styles CSS
import './home.css'

export default function Home (): ReactElement {
  return (
    <div className='home'>
      <FormText />
      <SaveTexts />
    </div>
  )
}
