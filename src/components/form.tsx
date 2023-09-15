import React from 'react'
import Input from './input'
import Label from './label'
import { formProps } from '../types/formProps'

export default function Form({ handleSubmit, onChange, todo, className}: formProps): React.JSX.Element {
  return (
    <form onSubmit={handleSubmit} className={className}>
        <Label value='New Todo' htmlFor='new-todo' className='font-bold lg:text-xl' />
        <div className='flex gap-2 justify-between'>
          <Input type='text' onChange={onChange} value={todo} placeholder='Add new Todo' name='new-todo' id='new-todo' className='p-2 rounded-lg focus:outline-none w-56 lg:w-32rem ' />
          <Input type='submit' value='Submit' className='bg-pink py-2 px-4 lg:py-3 lg:px-4 rounded-lg lg:w-28' />
        </div>
    </form>
  )
}
