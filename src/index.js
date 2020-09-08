import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts= [
    {id:1, message:'Hi,how are you?',likesCount:12},
    {id:2, message:'gdfhfdhfdhg hth',likesCount:11},
    {id:2, message:'gdfhfdhfdhg hth',likesCount:11},
    {id:2, message:'gdfhfdhfdhg hth',likesCount:11},
];

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Vitaliy'},
    {id: 4, name: 'Masha'},
    {id: 5, name: 'Egor'},
];
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'how ahi'},
    {id: 3, message: 'Hi'},
    {id: 4, message: 'Hi'},
    {id: 5, message: 'Hi'},
];

ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts}/>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
