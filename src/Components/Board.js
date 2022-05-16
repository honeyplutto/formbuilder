import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import Modal from './Action/Modal';
import { ItemTypes } from './Items/ItemTypes'
import './Style.css'
import image from '../Image/plus.png'

function Board({componentList}) {

    const [board, setBoard] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [activeType, setActiveType] = useState('')

    const [{ isOver }, drop] = useDrop(() => ({
        accept: [ItemTypes.INPUT, ItemTypes.BUTTON, ItemTypes.CHECKBOX, ItemTypes.RADIO, ItemTypes.SELECT, ItemTypes.TEXTAREA],
        drop: (item) => addItemtoBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const addItemtoBoard = (id) => {
        const newList = componentList.filter((item) => id === item.id);
        setBoard((board) => [...board, newList[0]])
    }

    const handleOpenModal = () => {
        setIsOpenModal(true);
    }

    const handleCloseModal = () => {
        setIsOpenModal(false);
    }

    return (
        <div
            className='board'
            ref={drop}>
            {board.map(item => {
                if (Object.values(ItemTypes).includes(item.component.type.name.toLowerCase())) {
                    return (
                        <> 
                            {item.component} 
                            <img 
                                src={image} 
                                style={{width: '30px', height: '30px', cursor: 'pointer'}}
                                onClick={handleOpenModal}
                                /> 
                        </>);
                }
                return null;
            })}
            { isOpenModal && <Modal onClose={handleCloseModal} /> }
            
        </div>
  )
}

export default Board