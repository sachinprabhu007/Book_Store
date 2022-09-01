import React,{Component} from 'react'
import nook from "../assets/nook_library.jpg"

import '../index.css'

class About extends Component{
    render(){
        return(
            <div className="About">
             


                <div className="container-fluid bg-3 text-center">   
                <h3> Welcome to About Page </h3> 
                
                <p> Nook Library (nooklibrary.com) is a leading international book retailer with a unique offer -- over 
                    20 million books and free delivery worldwide (with no minimum spend).
                    We ship thousands of books every day from our fulfillment centres in India, USA,  United Kingdom, and Melbourne, Australia, to more than 130 countries across the world -- displaying prices in 37 different local currencies.
                    Our vision is to provide “All Books Available to All” by improving selection, access and affordability of books.</p>                
                <img src={nook} alt="Nook Library" title='Nook Library' /><br></br>
                <br></br>
                </div>
               
            </div>
        )
    }
}

export default About;