import React, { useState } from 'react'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { EditTodoForm } from './EditTodoForm'

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])
  const [chosen, setChosen] = useState('task')

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo.text,
        completed: false,
        isEditing: false,
        type: todo.type,
        quantity: todo.quantity,
      },
    ])
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id))

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const editTodo = (id, t) => {
    setChosen(t)
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    )
  }

  const editTask = (id, updatedTask, updatedQuantity, updatedType) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: updatedTask !== undefined ? updatedTask : todo.task,
            quantity:
              updatedQuantity !== undefined ? updatedQuantity : todo.quantity,
            type: updatedType !== undefined ? updatedType : todo.type,
            isEditing: !todo.isEditing,
          }
        }
        return todo
      })
    )
  }

  return (
    <div className='TodoWrapper'>
      <h1>Agregar Alimento!</h1>
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm
            key={todo.id}
            editTodo={editTask}
            task={todo}
            t={chosen}
          />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  )
}
