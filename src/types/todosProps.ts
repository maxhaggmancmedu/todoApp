import { todo } from "./todos";

export interface todosProps {
    todos: Array<todo>
    onRemove: (todoKey: number) => void
}