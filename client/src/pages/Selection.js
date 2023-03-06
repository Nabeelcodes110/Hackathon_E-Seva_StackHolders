import React from 'react'
import {Link} from 'react-router-dom'
import {FaDonate, FaBook} from 'react-icons/fa' 
import './Home/Home.css'

function Selection() {
    return (
        <div className='hero-image'>
            <div className="grid-container" style={{'marginLeft': 300}}>
                <Link to='/detail' className="grid-item"><div>
                    <div><FaDonate  style={{'height':'150px'}}/></div>Donate</div></Link>
                <Link to='/books' className="grid-item"><div>
                    <div><FaBook  style={{'height':'150px'}}/></div>Get Free Books</div></Link>
            </div>
        </div>
    )
}

export default Selection