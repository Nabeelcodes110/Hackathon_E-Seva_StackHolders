import React, { useEffect, useState, useNavigate } from 'react'
import './Details.css'
import axios from 'axios'
import Navbar from '../../components/Navbar'

function Details() {
    const Navigate = useNavigate
    const [user, setUser] = useState(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [book, setBook] = useState("")
    const [city, setCity] = useState("")

    const getUser = async () => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/auth/getuser`
            const { data } = await axios.get(url, { withCredentials: true })
            setUser(data.user)
            // window.open('http://localhost:3000/details')
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUser()
        console.log(user)
    }, [])


    const handleSubmit = async () => {
        const response = fetch('http:localhost:8080/donation/adddonation', {
            method: 'POST',
            headers: {
                'Content-Type' :'application/json',
            },
            
            body: JSON.parse({ name, email, contact, book, city })
        })
        console.log(response)
        alert("Donation successfull")
        Navigate('/')
    }


    return (
        <>
            <Navbar profile={user ? user._json.picture : "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"} name={user ? user._json.name : ""} />
            <div style={{ 'backgroundImage': "url(" + "D:/Hackathon_E-Seva/client/public/assets/edu2.jpg" + ")", marginTop: "-47px" }}>
                <div className='hero-image'>
                    <div className='container mt-5'>
                        <h1 style={{ color: 'white' }}>Enter Your Details to Proceed further...</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input required type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={user ? user._json.email : ""} onChange={(e) => setEmail(e.target.value)} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input required type="text" className="form-control" id="exampleInputEmail1" defaultValue={user ? user._json.name : ""} onChange={(e) => setName(e.target.value)} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Contact</label>
                                <input required type="text" maxLength={10} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your contact number' onChange={(e) => setContact(e.target.value)} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Book Name</label>
                                <input required type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Book detail' onChange={(e) => setBook(e.target.value)} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                                <input required type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your City' onChange={(e) => setCity(e.target.value)} />

                            </div>

                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details
