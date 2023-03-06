import './App.css';
import Login from './pages/Login/Login';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Home from './pages/Home/Home';
import Chatbot from './components/Chatbot/Chatbot';
import Details from './pages/Details/Details';
import Selection from './pages/Selection';
import Books from './pages/Books';
import Quiz from './pages/Quiz/Quiz';
import Ide from './pages/IDE/Ide';
import Videos from './pages/Videos';

function App() {
  const [user, setUser] = useState(null)
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`
      const { data } = await axios.get(url, { withCredentials: true })
      setUser(data.user)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getUser()
    console.log(user)
  }, [])

  return (
    <Routes>
      {/* <Route exact path="/" element={user?<Home user={user}/>:<Navigate to="/login" />} /> */}
      <Route exact path="/" element={<Home user={user} />}/>
      {/* <Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/> */}
        <Route path='/selection' element={<Selection />} />
        <Route path='/detail' element={<Details />} />
        <Route path='/books' element={<Books/>} />
        <Route path='/chatbot' element={<Chatbot />}/>
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/ide' element={<Ide />} />
        <Route path='/video' element={<Videos />} />
    </Routes>
  );
}

export default App;

