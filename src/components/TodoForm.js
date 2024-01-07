import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {
  const initialValue = {
    text: '',
    type: 'Comida',
    quantity: 0,
  }
  const [value, setValue] = useState(initialValue)

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault()
    if (value.text && value.type) {
      // add todo
      addTodo(value)
      // clear form after submission
      setValue(initialValue)
    }
  }
  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
      <input
        type='text'
        value={value.text}
        onChange={(e) => setValue({ ...value, text: e.target.value })}
        className='todo-input'
        placeholder='Comida!'
      />
      <div className='radio-container'>
        <label className='todo-radio-label'>
          <input
            type='radio'
            value='Comida'
            checked={value.type === 'Comida'}
            onChange={(e) => setValue({ ...value, type: e.target.value })}
            className='todo-radio'
          />
          Comida
        </label>
        <label className='todo-radio-label'>
          <input
            type='radio'
            value='Bebida'
            checked={value.type === 'Bebida'}
            onChange={(e) => setValue({ ...value, type: e.target.value })}
            className='todo-radio'
          />
          Bebida
        </label>
      </div>
      <input
        type='number'
        value={value.quantity}
        onChange={(e) =>
          setValue({ ...value, quantity: parseInt(e.target.value) })
        }
        className='todo-input'
        placeholder='Quantity'
      />
      <button type='submit' className='todo-btn'>
        Agregar!
      </button>
    </form>
  )
}
