import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import './ItemsStyle.css'

function Select({id, options}) {

  const [{isDragging}, drag] = useDrag(()=> ({
    type: ItemTypes.SELECT,
    item: {id: id},
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
    }),
  })); 

  return (
    <div 
      className='select_container'
      ref={drag}
      style={{border: isDragging ? '2px solid black' : 'none',
              opacity: isDragging ? .5 : 1}}>
      <label>
        label
      </label>      
      <select>
        {options.map(option => {
          return  <option 
                    key={option.id}
                    id={option.id}>
                    {option.name}
                  </option>
        })}
      </select>
      
    </div>
  )
}

export default Select