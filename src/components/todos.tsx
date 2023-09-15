import React from 'react'
import { todosProps } from '../types/todosProps'
import removeIcon from '../img/remove-icon.png'

export default function Todos({todos, onRemove}: todosProps): React.JSX.Element {
  return (
    <div className='flex gap-2 flex-col w-80 lg:w-40rem'>
        {todos.map(({value, key}) => {
          return (
            <div className='flex align-middle justify-between border-b-2 p-2' key={key}>
              <p className='p-2 lg:max-w-xl max-w-16rem text-purple font-bold overflow-hidden overflow-ellipsis'>{value}</p>
              <button className='p-2 border-pink border-2 rounded-xl' onClick={() => onRemove(key)}>
                <img src={removeIcon} height={20} width={20} />
              </button>
            </div>
          )
        })}
      </div>
  )
}
