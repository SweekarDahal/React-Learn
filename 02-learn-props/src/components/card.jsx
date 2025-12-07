import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.img}></img>
        <h1>{props.user} {props.age}</h1>
        <p>I am currently studying in KIIT university</p>
        <button>View profile</button>
      </div>
    </>
  )
}

export default Card
