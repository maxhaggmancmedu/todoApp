import React from 'react'
import { labelProps } from '../types/labelProps'

export default function Label({value, htmlFor, className}: labelProps): React.JSX.Element {
  return (
    <label htmlFor={htmlFor} className={className}>{value}</label>
  )
}
