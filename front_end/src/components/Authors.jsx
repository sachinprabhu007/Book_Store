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
            
            <div class="row ">
                <div class="col-sm-3">
                    <div class="card">
                        <img src={jo} class="card-img-top" alt="JK Rowling" title='JK Rowling' /><br></br>
                        <div class="card-body">
                        <h5 class="card-title">JK Rowling </h5>
                        {/* <a href="#" class="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="right" title="Explore" onClick="">Explore</a>    */}
                        <a class="btn btn-info" > <Link to="/explore"> Explore </Link> </a>                      </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card">
                        <img src={neil} class="card-img-top" alt="Neil Gaiman" title='Neil Gaiman' /><br></br>
                        <div class="card-body">
                        <h5 class="card-title">Neil Gaiman</h5>
                        <a href="#" class="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="right" title="Explore">Explore</a>  
                                           </div>
                    </div>
                 </div>
                 <div class="col-sm-3">
                    <div class="card">
                        <img src={apj} class="card-img-top" alt="APJ Abudl Kalam" title='APJ Abudl Kalam' /><br></br>
                        <div class="card-body">
                        <h5 class="card-title">A.P.J Abdul Kalam</h5>
                        <a href="#" class="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="right" title="Explore">Explore</a>                        </div>
                    </div>
                 </div>
                 <div class="col-sm-3">
                    <div class="card">
                        <img src={sudha} class="card-img-top" alt="Sudha Murthy" title='Sudha Murthy' /><br></br>
                        <div class="card-body">
                        <h5 class="card-title">Sudha Murthy</h5>
                        <a href="#" class="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="right" title="Explore">Explore</a>                        </div>
                    </div>
                 </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Authors;