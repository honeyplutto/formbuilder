import React, { useState } from 'react'
import './Style.css'
import Input from './Items/Input';
import Button from './Items/Button';
import Checkbox from './Items/Checkbox';
import Select from './Items/Select';
import Radio from './Items/Radio';
import TextArea from './Items/TextArea';
import Board from './Board';
import Modal from './Action/Modal';

function Item() {

    const options = [
        {name: 'value1' , id: 1},
        {name: 'value2' , id: 2},
        {name: 'value3' , id: 3},
        {name: 'value4' , id: 4},
        {name: 'value5' , id: 5},
    ]

    const componentList = [
        {component: <Input id='1' />, id: '1'},
        {component: <Button id='2'/>, id: '2'},
        {component: <Checkbox id='3'/>, id: '3'},
        {component: <Select id='4' options={options}/>, id: '4'},
        {component: <Radio id='5'/>, id: '5'},
        {component: <TextArea id='6'/>, id: '6'},
    ]

    return (
        <div className='main_container'>
            <div className='sidebar_container'>
                {componentList.map((item) => (item.component))}
            </div>
            <div className='mapping_container'>
                <Board componentList={componentList}/>
            </div>

        </div>
    )
}

export default Item