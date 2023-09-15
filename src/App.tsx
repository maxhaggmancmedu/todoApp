import { useEffect, useState } from 'react'
import Form from './components/form'
import type { todo } from './types/todos'
import Todos from './components/todos';
let key: number = 0;

function App() {
  const [todos, setTodos] = useState<Array<todo>>([])
  const [todo, setTodo] = useState<string>('')
  const [todosAmount, setTodosAmount] = useState<number>(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (todo !== '') {
      key++
      setTodos([...todos, {value: todo, key: key}])
      setTodo('')
    }
  } 

  const handleRemove = (todoKey : number): void => {
    setTodos(todos.filter(todo => todo.key !== todoKey))
  }

  useEffect(() => {
    setTodosAmount(todos.length)
  }, [todos])

  return (
      <div className='flex justify-center items-center flex-col gap-6'>
        <h1 className='text-4xl font-bold'>{todosAmount} todos left!</h1>
        <Form handleSubmit={handleSubmit} onChange={handleChange} todo={todo} className='flex justify-center items-left gap-1 flex-col text-left w-80 lg:w-40rem'/>
        <Todos todos={todos} onRemove={handleRemove} /> 
      </div>
  )
}

export default App
