import React,{Component} from 'react'
import books from "../assets/books.jpg"

import jo from "../assets/jk_rowling.jpg"
import sudha from "../assets/sudha_murthy.jpg"
import neil from "../assets/neil_gaiman.jpg"
import apj from "../assets/apj_abdul_kalam.jpg"

import {Link} from 'react-router-dom'


class Authors extends Component{
    
    render(){

        return(
            <div className="FavoriteBooks">
                <h3> Welcome to Authors Page </h3> 

            <div className="container-fluid bg-3 text-center">    
                 <h3>Explore books based on Authors </h3><br></br>
            
            <div className="row ">
                <div className="col-sm-3">
                    <div className="card">
                        <img src={jo} className="card-img-top" alt="JK Rowling" title='JK Rowling' /><br></br>
                        <div className="card-body">
                        <h5 className="card-title">JK Rowling </h5>
                        {/* <a href="#" className="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="right" title="Explore" onClick="">Explore</a>    */}
                        <a className="btn btn-info" > <Link to={{
                            pathname : "/explore",
                            state : {name: 'JK Rowling'}
                            }}> Explore

                             </Link> 
                             </a>                     
                       </div>
                    </div>    
                 </div>

                <div className="col-sm-3">
                    <div className="card">
                        <img src={neil} className="card-img-top" alt="Neil Gaiman" title='Neil Gaiman' /><br></br>
                        <div className="card-body">
                        <h5 className="card-title">Neil Gaiman</h5>
                        {/* <a href="#" className="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="right" title="Explore">Explore</a>   */}
                        <a className="btn btn-info" > <Link to={{
                            pathname : "/explore",
                            state : {name: 'Neil Gaiman'}
                            }}> Explore 
                            </Link> </a>
                                           </div>
                    </div>
                 </div>
                 <div className="col-sm-3">
                    <div className="card">
                        <img src={apj} className="card-img-top" alt="APJ Abudl Kalam" title='APJ Abudl Kalam' /><br></br>
                        <div className="card-body">
                        <h5 className="card-title">A.P.J Abdul Kalam</h5>
                        {/* <a href="#" className="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="right" title="Explore">Explore</a>    */}
                        <a className="btn btn-info" > <Link to={{
                            pathname : "/explore",
                            state : {name: 'A.P.J Abdul Kalam'}
                            }}> Explore </Link> </a>
                                             </div>
                    </div>
                 </div>
                 <div className="col-sm-3">
                    <div className="card">
                        <img src={sudha} className="card-img-top" alt="Sudha Murthy" title='Sudha Murthy' /><br></br>
                        <div className="card-body">
                        <h5 className="card-title">Sudha Murthy</h5>
                        {/* <a href="#" className="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="right" title="Explore">Explore</a>           */}
                        <a className="btn btn-info" > <Link to={{
                            pathname : "/explore",
                            state : {name: 'Sudha Murthy'}
                            }}> Explore </Link> </a>
                                      </div>
                    </div>
                 </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Authors;