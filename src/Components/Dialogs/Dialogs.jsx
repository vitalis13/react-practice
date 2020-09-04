import React from 'react';
import s  from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

  return <div className={s.dialog + ' ' + s.active}>
      <NavLink to='path'>{props.name}</NavLink>
  </div>
};

const Message = (props) =>{
  return  <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id:1, name:'Dimych'},
        {id:2, name:'Sasha'},
        {id:3, name:'Vitaliy'},
        {id:4, name:'Masha'},
        {id:5, name:'Egor'},
    ];
    let messagesData = [
        {id:1, message:'Hi'},
        {id:2, message:'how ahi'},
        {id:3, message:'Hi'},
        {id:4, message:'Hi'},
        {id:5, message:'Hi'},
    ];

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name="Vitaliy" id='3'/>
                <DialogItem name="Masha" id='4'/>
                <DialogItem name="Egor" id='5'/>
            </div>

                <div className={s.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                </div>
        </div>

    )
};

export default Dialogs;