import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task, t }) => {
  const [value, setValue] = useState(task[t])

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault()
    // edit todo
    if (t === 'task') editTodo(task.id, value, undefined, undefined)
    if (t === 'type') editTodo(task.id, undefined, undefined, value)
    if (t === 'quantity') editTodo(task.id, undefined, value, undefined)
  }
  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
      {t === 'task' && (
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className='todo-input'
          placeholder='Update task'
        />
      )}
      {t === 'type' && (
        <div className='radio-container'>
          <label className='todo-radio-label'>
            <input
              type='radio'
              value='Comida'
              checked={value === 'Comida'}
              onChange={(e) => setValue(e.target.value)}
              className='todo-radio'
            />
            Comida
          </label>
          <label className='todo-radio-label'>
            <input
              type='radio'
              value='Bebida'
              checked={value === 'Bebida'}
              onChange={(e) => setValue(e.target.value)}
              className='todo-radio'
            />
            Bebida
          </label>
        </div>
      )}
      {t === 'quantity' && (
        <input
          type='number'
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className='todo-input'
          placeholder='Quantity'
        />
      )}

      <button type='submit' className='todo-btn'>
        Cambiar
      </button>
    </form>
  )
}
