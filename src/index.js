// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// const element = document.createElement('h1');

// element.innerText = 'Hola React';

// const container = document.getElementById('root');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';

// const user = {
//     firstName: 'David',
//     lastName: 'Mora',
//     avatar: 'https://images.emojiterra.com/google/android-10/128px/1f60e.png'
// }

// function getName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello {getName(user)}</h1>
//     }
//     return <h1>Hello Stranger</h1>
// }

// const element = (
//     <div>
//         {getGreeting(user)}
//         <img src={user.avatar}  alt="img"/>
//     </div>    
// )

const container = document.getElementById('root');

ReactDOM.render(<Card />, container);

