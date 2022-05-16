import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

function TextArea({id}) {
    
    const [{isDragging}, drag] = useDrag(()=> ({
        type: ItemTypes.TEXTAREA,
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

  return (
    <div 
        className='textarea_container'
        ref={drag}
        style={{border: isDragging ? '2px solid black' : 'none',
            opacity: isDragging ? .5 : 1}}>
        <label>
            label
        </label>
        <textarea>

        </textarea>
        
    </div>
  )
}

export default TextArea