import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

function Radio({id}) {
  
  const [{isDragging}, drag] = useDrag(()=> ({
    type: ItemTypes.RADIO,
    item: {id: id},
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div 
      className='radio_container'
      ref={drag}
      style={{border: isDragging ? '2px solid black' : 'none',
              opacity: isDragging ? .5 : 1}}>
      <label>label</label>
      <input type="radio" />
    </div>
  )
}

export default Radio