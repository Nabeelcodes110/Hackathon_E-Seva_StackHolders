import React from 'react'
import './styles/styles.css'


function BookComponent(props) {
    return (
        <div className="hello">
            <div className="card" style={{'width': 70+'vw' , 'marginBottom':9 , }}>
               <span style={{'height':'120px' , 'width':'120px'}}><img src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=0&k=20&c=ZxSsWKNcVpEzrJ3_kxAUuhBCT3P_dfnmJ81JegPD8eE=" className="card-img-top" alt="..." height="100vh"/></span>
                <div className="card-body d-inline-block float-end bg-dark[100]">
                    
                        <p>{props.name}</p>
                        <p>{props.contact}</p>
                        <p>{props.book}</p>
                        <p>{props.city}</p>
        
                </div>
            </div>

        </div>
    )
}

export default BookComponent
