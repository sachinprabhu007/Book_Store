// instead of class NavBar extends React.Component we are importing directly
import React,{Component} from 'react'
import {Link} from 'react-router-dom'

import '../index.css'
import '../App.css'

class NavBar extends Component{ 

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">  
            <Link className="navbar-brand" to="/home">
                {/* Link is from Router dom package and is used for routing */}
                Home
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link className="nav-link" to="/about">
                            About 
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/favorite-books">
                            Favorite Books
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/authors">
                            Authors
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/recommended-books">
                            Recommended Books
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/sign-up">
                            Sign-Up
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                    </li>
                    {/* <li className="navbar-item">
                        <Link className="nav-link" to="/explore">
                            Explore
                        </Link>
                    </li> */}
                    <li className="navbar-item">
                        <Link className="nav-link" to="/search">
                           Search
                        </Link>
                    </li>
                </ul>


                {/* <div className="search-container">
                <form className='search-form'>
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit">Search</button>
                </form>
                </div> */}
                </div>
             
            </nav>
        )
    }
}

export default NavBar;