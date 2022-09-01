import React,{Component} from 'react'


import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"
import books from "../assets/books.jpg"

import Carousel from 'carousel-react-rcdev'

class Home extends Component{


    render(){


        return(
            <div className="Home">
                <h3> Welcome to Home Page </h3> 
                {/* <marquee> Get 40% Offer on all Classics! Buy Now! </marquee> */}
                {/* <img src={banner1} alt="banner1"/>
                <img src={banner2} alt="banner2"/>
                <img src={banner3} alt="banner3"/> */}

                <Carousel>
                    <img src={banner1} alt="banner1" title='Banner 1' />    
                    <img src={banner2} alt="banner1" title='Banner 2' />            
                    <img src={banner3} alt="banner1" title='Banner 3' />          
                </Carousel>

                
                

                {/* <div className="myslides fade">
                    <div className="numbertext"> 1 / 3</div>
                    <div>
                         <img src={banner1} alt="banner1"/>
                    </div>
                    <div className="text"> Banner 1 </div>

                    <div className="numbertext"> 2 / 3</div>
                    <div>
                         <img src={banner2} alt="banner2"/>
                    </div>
                    <div className="text"> Banner 2 </div>

                    <div className="numbertext"> 3 / 3</div>
                    <div>
                         <img src={banner3} alt="banner2"/>
                    </div>
                    <div className="text"> Banner 3 </div>
                </div> */}
                <br></br>
            <div className="container-fluid bg-3 text-center">    
                 <h3>Offer valid for few days! Buy Now! </h3><br></br>
            <div className="row">
                <div className="col-sm-3">
                <p>Some text..</p>
                <img src={books} alt="banner1" title='Banner 1' /><br></br>
                <button type="button" className="btn btn-info">Button</button>
                </div>
                <div className="col-sm-3">
                <p>Some text..</p>
                <img src={books} alt="banner1" title='Banner 1' /><br></br>
                <button type="button" className="btn btn-info">Button</button>
                </div>
                <div className="col-sm-3">
                <p>Some text..</p>
                <img src={books} alt="banner1" title='Banner 1' /><br></br>
                <button type="button" className="btn btn-info">Button</button>
                </div>
                <div className="col-sm-3">
                <p>Some text..</p>
                <img src={books} alt="banner1" title='Banner 1' /><br></br>
                <button type="button" className="btn btn-info">Button</button>
                </div>
                <div className="col-sm-3">
                <p>Some text..</p>
                <img src={books} alt="banner1" title='Banner 1' /><br></br>
                <button type="button" className="btn btn-info">Button</button>
                </div>
                <div className="col-sm-3">
                <p>Some text..</p>
                <img src={books} alt="banner1" title='Banner 1' /><br></br>
                <button type="button" className="btn btn-info">Button</button>
                </div>
                <div className="col-sm-3">
                <p>Some text..</p>
                <img src={books} alt="banner1" title='Banner 1' /><br></br>
                <button type="button" className="btn btn-info">Button</button>
                </div>
                <div className="col-sm-3">
                <p>Some text..</p>
                <img src={books} alt="banner1" title='Banner 1' /><br></br>
                <button type="button" className="btn btn-info">Button</button>
                </div>
                
                

                {/* <div className="col-sm-3"> 
                <p>Some text..</p>
                <img src="{books}" className="img-responsive" style="width:100%" alt="Image"/><br></br>
                <button type="button" className="btn btn-info">Button</button>
                </div>
                <div className="col-sm-3"> 
                <p>Some text..</p>
                <img src="{books}" className="img-responsive" style="width:100%" alt="Image"/><br></br>
                <button type="button" className="btn btn-info">Button</button>
                </div>
                <div className="col-sm-3">
                <p>Some text..</p>
                <img src="{books}" className="img-responsive" style="width:100%" alt="Image"/><br></br>
                <button type="button" className="btn btn-info">Button</button>
                </div> */}
            </div>
            </div>
                

            </div>
            
        )
    }
}

export default Home;





// {/* <div className="slideshow-container">

// {/* <!-- Full-width images with number and caption text --> */}
// <div className="mySlides fade">
//     <div className="numbertext">1 / 3</div>
//     <img src="banner1.jpg" style="width:100%"/>
//     <div className="text">Caption Text</div>
// </div>

// <div className="mySlides fade">
//     <div className="numbertext">2 / 3</div>
//     <img src="banner2.jpg" style="width:100%"/>
//     <div className="text">Caption Two</div>
// </div>

// <div className="mySlides fade">
//     <div className="numbertext">3 / 3</div>
//     <img src="banner3.jpg" style="width:100%"/>
//     <div className="text">Caption Three</div>
// </div>

// // {/* <!-- Next and previous buttons --> */}
// <div>
// <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
// <a className="next" onclick="plusSlides(1)">&#10095;</a>
// </div>
// </div> */}