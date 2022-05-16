import React from 'react'
import './Modal.css'
import image from '../../Image/minus.png'

function Modal({onClose}) {

    return (
        <div>
            <img 
                style={{width: '30px', height: '30px', cursor: 'pointer'}}
                src={image}
                onClick={onClose}
                />
            
            <div className='label_name'>
                <label>Choose Label Name</label>
                <input />
            </div>


            <div className='max_min'>
                <label>Choose max and min width</label>
                <div className='max_width'>
                    <label>Max Width</label>
                    <input />
                </div>
                <div className='min_width'>
                    <label>Min Width</label>
                    <input />
                </div>
            </div>

            <div>
                <label>Choose placeholder</label>
                <input />
            </div>

            <div>
                
            </div>
        </div>
  )
}

export default Modal