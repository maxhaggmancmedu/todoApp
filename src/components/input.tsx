import React from 'react'
import { inputProps } from '../types/inputProps'

export default function Input({type, onChange, value, placeholder, className}: inputProps): React.JSX.Element {
  return (
    <input type={type} onChange={onChange} value={value} placeholder={placeholder} className={className} />
  )
}
