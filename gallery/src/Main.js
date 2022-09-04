import React from "react"

export default function Main(props){
    return(
        <div>
        
        <div className="card">
        <img src={process.env.PUBLIC_URL + props.items.image} width="250px" height="300px" className="list" alt="my story" />
        <div className="info">
        <p>Date: {props.items.day}/{props.items.month}/{props.items.year}</p>
        <p>{props.items.location}</p>
        <p>{props.items.activity}</p>
        </div>

        </div>
        </div>

    )
}