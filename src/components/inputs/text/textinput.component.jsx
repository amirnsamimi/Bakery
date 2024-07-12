import React from 'react'
import { TextNormalInput } from '../../../styles/inputs.styles'

const TextInput = ({handler ,value, placeholder, type,required, name,className}) => {



  return (
  <TextNormalInput
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={handler}
    required={required}
    name={name}
    className={className}
  />
  )
}

export default TextInput
