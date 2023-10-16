import './Dropdown.css'
import {Component, useState} from 'react'
export const  Dropdown = ()=> {
//  state = {
//     visible: true
//  }

const [visible, setVisible] = useState(false)
 const toggle= () =>{
setVisible(!visible)
 }

 

    return (
        <div className="Dropdown">
       
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={toggle}
        >
        Close
        </button>
        {visible && <div 
                                  className="Dropdown__menu">
                                  Випадаюче меню
                                </div>}
      </div>
    )
}


