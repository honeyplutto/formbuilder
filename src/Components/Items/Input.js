import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import './ItemsStyle.css'

function Input({id}) {

    const [{isDragging}, drag] = useDrag(()=> ({
        type: ItemTypes.INPUT,
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            className='input_container'
            ref={drag}
            style={{border: isDragging ? '.6px solid gold' : 'none',
                    opacity: isDragging ? .5 : 1}}>
            <label>label</label>
            <input />
        </div>
    )
}

export default Input