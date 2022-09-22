import React from 'react'
import {Link} from "react-router-dom"

export default function Home() {
  
    return (
    <div>
        <nav style={{backgroundColor: "#ADD8E6"}}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
        <h1>Home Page !</h1>
    </div>
    
  )
}

