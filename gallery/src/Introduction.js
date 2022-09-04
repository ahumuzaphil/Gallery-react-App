import React from "react"

export default function Introduction(){
   return (
    <div className="sub_head" >
    <div className="intro_el">
    <h1 className="nem">Hello, I'm Mustahfu.</h1>
    <h1 >
    My life memories before my 
    </h1>
    <h1><span className="span_el">coding journey</span> began!</h1>
    </div>

    <img src={process.env.PUBLIC_URL + "/Lesuire.JPG"}  height="300px" className="photo_el" alt="account holder"/>
    </div>
   )
}