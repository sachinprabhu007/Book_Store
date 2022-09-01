import React,{Component} from 'react'


class Explore extends Component{

    constructor(props){
        super(props);
        // this.state={
        //     value:this.props.location.state,
        // }

    }


// alertMessage(){
//        console.log(this.props.location.state.name);
//     }

componentDidMount(){
    this.getBooks()
}

    getBooks(){
            
        //console.log(this.props.location.state.name)
    //    console.log(this.state.value)
      
    
        fetch("http://openlibrary.org/search.json?author=" + this.props.location.state.name)
        //+document.getElementById("input").value)
        .then(a=>a.json())
        .then(response => {
            console.log(response)
            for(var i=0; i<20;i++)
            {
                document.getElementById("output").innerHTML+="<h2>"
                    +response.docs[i].title + "</h2>" 
                    +response.docs[i].author_name[0]
                    +"<br><img src='http://covers.openlibrary.org/b/isbn/"
                    +response.docs[i].isbn[0]+"-M.jpg'><br> <br> <button class='btn btn-success btn-lg'> Add to Favorites </button>" 
                
            }
        })
        
        
    }
  
    render(){
        
            // console.log(this.state.value)
            //console.log(this.props.location.state.name)

           
            
            return(
                    <div className="Explore">
                        {/* <script>
                            alert("Please wait! Books are being loaded")
                        </script> */}
                        
                        {/* <input id="input" value={this.props.location.state.name}  />  */}
                        {/* value={this.props.location.state.name} */}
                            {/* <button className="success" onClick={() => (this.getBooks())} > Get Books by  {this.props.location.state.name} </button> */}
                            

                            {/* onClick={this.getBooks} */}
                            
                        <div id="output"></div>
                    </div>
            );   
    }
}

export default Explore;