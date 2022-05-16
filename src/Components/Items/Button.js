import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import './ItemsStyle.css'

function Button({id}) {

  const [{isDragging}, drag] = useDrag(()=> ({
    type: ItemTypes.BUTTON,
    item: {id: id},
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className='button_container'
      ref={drag}
      style={{border: isDragging ? '2px solid black' : 'none',
              opacity: isDragging ? .5 : 1}}>
              <label>label</label>
      <button >
          Button
      </button>
    </div>
  )
}

export default Button