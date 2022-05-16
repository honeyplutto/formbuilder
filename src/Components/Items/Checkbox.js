import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import './ItemsStyle.css'

function Checkbox({id}) {

  const [{isDragging}, drag] = useDrag(()=> ({
    type: ItemTypes.CHECKBOX,
    item: {id: id},
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div 
      className='checkbox_container'
      ref={drag}
      style={{border: isDragging ? '2px solid black' : 'none',
              opacity: isDragging ? .5 : 1}}>
      <label>label</label>
      <input type="checkbox" />
    </div>
  )
}

export default Checkbox