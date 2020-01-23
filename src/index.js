import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import CirclesImg from "./images/circles.png";
import Welcome from "./components/Welcome";

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

const container = document.getElementById("root");

ReactDOM.render(
  <div>
    <Welcome username="David" />
    <Card
      title="Technique Guides"
      description="Learn amazing street workout and calisthenics"
      img={CirclesImg}
      leftColor="#a74cf2"
      rightColor="#617bfb"
    />
  </div>,
  container
);
