import React,{Component} from 'react'
import books from "../assets/books.jpg"

class FavoriteBooks extends Component{
    
    render(){

        return(
            <div className="FavoriteBooks">
                <h3> Welcome to FavoriteBooks Page </h3> 

            <div className="container-fluid bg-3 text-center">    
                 <h3>List of Favorite Books</h3><br></br>
            
            <div class="row ">
                <div class="col-sm-3">
                    <div class="card">
                        <img src={books} class="card-img-top" alt="banner1" title='Banner 1' /><br></br>
                        <div class="card-body">
                        <h5 class="card-title">Javascript</h5>
                        <p class="card-text">Javascript From Basic TO Advance Please Add to Favorites.</p>
                        <a href="#" class="btn btn-success btn-lg" data-bs-toggle="tooltip" data-bs-placement="right" title="Add to Favorites">Add</a> &nbsp; &nbsp;      
                        <a href="#" class="btn btn-danger btn-lg" data-bs-toggle="tooltip" data-bs-placement="right" title="Delete from Favorites">Delete</a>                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card">
                        <img src={books} class="card-img-top" alt="banner1" title='Banner 1' /><br></br>
                        <div class="card-body">
                        <h5 class="card-title">Javascript</h5>
                        <p class="card-text">Javascript From Basic TO Advance Please Add to Favorites.</p>
                        <a href="#" class="btn btn-success btn-lg" data-bs-toggle="tooltip" data-bs-placement="right" title="Add to Favorites">Add</a> &nbsp; &nbsp;      
                        <a href="#" class="btn btn-danger btn-lg" data-bs-toggle="tooltip" data-bs-placement="right" title="Delete from Favorites">Delete</a>                        </div>
                    </div>
                 </div>
                 <div class="col-sm-3">
                    <div class="card">
                        <img src={books} class="card-img-top" alt="banner1" title='Banner 1' /><br></br>
                        <div class="card-body">
                        <h5 class="card-title">Javascript</h5>
                        <p class="card-text">Javascript From Basic TO Advance Please Add to Favorites.</p>
                        <a href="#" class="btn btn-success btn-lg" data-bs-toggle="tooltip" data-bs-placement="right" title="Add to Favorites">Add</a> &nbsp; &nbsp;      
                        <a href="#" class="btn btn-danger btn-lg" data-bs-toggle="tooltip" data-bs-placement="right" title="Delete from Favorites">Delete</a>                        </div>
                        
                    </div>
                 </div>
                 <div class="col-sm-3">
                    <div class="card">
                        <img src={books} class="card-img-top" alt="banner1" title='Banner 1' /><br></br>
                        <div class="card-body">
                        <h5 class="card-title">Javascript</h5>
                        <p class="card-text">Javascript From Basic TO Advance Please Add to Favorites.</p>
                        <a href="#" class="btn btn-success btn-lg" data-bs-toggle="tooltip" data-bs-placement="right" title="Add to Favorites">Add</a> &nbsp; &nbsp;      
                        <a href="#" class="btn btn-danger btn-lg" data-bs-toggle="tooltip" data-bs-placement="right" title="Delete from Favorites">Delete</a>                        </div>
                    </div>
                 </div>
            </div>
            </div>
            </div>
        )
    }
}

export default FavoriteBooks;