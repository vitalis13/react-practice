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

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Vitaliy'},
        {id: 4, name: 'Masha'},
        {id: 5, name: 'Egor'},
    ];
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'how ahi'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'Hi'},
    ];

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElement = messagesData.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElement }
            </div>

            <div className={s.messages}>
                {messageElement}
            </div>
        </div>

    )
};

export default Dialogs;