import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import BookComponent from '../components/BookComponent'
import axios from 'axios'
function Books() {

    const [user, setUser] = useState(null)
    const [bookD, setBookD] = useState([{
        name: "",
        email: "",
        contact: "",
        book: "",
        city: ""
    }])

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
    },[])
    // const [bookD, setBookD] = useState([{}])
    useEffect(() => {
        async function fetchData() {
            try {
                const bookData = await fetch('http://localhost:8080/book/getbooks', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json"
                    }

                })

                const json = await bookData.json()
                setBookD(json.data)
                console.log(bookD)
                // setBookD(bookData)

            }
            catch (err) {
                console.log(err)
            }

        }
        fetchData()



    },[])
    return (
        <div>
            <div className='hero-image'>
            <Navbar profile={user?user._json.picture:"https://cdn-icons-png.flaticon.com/128/3177/3177440.png"} name = {user?user._json.name:""}/>
            {/* <BookComponent /> */}
            <div className='container px-1 mt-3'>
                <div className='row gx-6'>
                    {bookD.map(k => {
                        console.log(k)
                        return  <BookComponent name={k.name} email={k.email} contact={k.contact} book={k.book} city={k.city}/>

                    })}
                </div>

            </div>
            </div>
        </div>
    )
}

export default Books
