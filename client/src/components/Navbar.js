import React from 'react'

function Navbar(props) {
    
    const googleAuth = () => {
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,
            "_self"
        );
    }
    const logout = () => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/logout`,
            "_self")
    }
    return (
        <div>
            <nav className="navbar navbar-light bg-dark" style={{'height':'78px' , marginLeft:'24px'}}>
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">
                        <img style={{'borderRadius':'100%', 'height':'50px', 'width':'50px'}} src={props.profile === null ? "https://cdn-icons-png.flaticon.com/128/3177/3177440.png" : props.profile} alt="" width="30" height="24" className="d-inline-block align-text-top ml-2 " />
                        <span style={{'color':'white', 'marginTop':'-35px', 'marginLeft':'188px'}}>{props.name}</span>
                    </a>
                    <h2 style={{color : 'white' , marginRight:'96px'}}>{`E-Seva <>Common platofrm for geeks</>`}</h2>
                    {props.name ?  <button type="button" className="btn btn-primary d-inline-block" onClick={logout}>Logout</button> :<button type="button" className="btn btn-primary d-inline-block" onClick={googleAuth}>Login</button>}
                </div>

            </nav>
        </div>
    )
}

export default Navbar
