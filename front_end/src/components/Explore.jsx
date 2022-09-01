import React,{Component} from 'react'


class Explore extends Component{

    
    render(){
        
            function getBooks(){
                document.getElementById("output").innerHTML="";
                fetch("http://openlibrary.org/search.json?author="
                +document.getElementById("input").value)
                .then(a=>a.json())
                .then(response => {
                    for(var i=0; i<20;i++)
                    {
                        document.getElementById("output").innerHTML+="<h2>"
                            +response.docs[i].title + "</h2>" 
                            +response.docs[i].author_name[0]
                            +"<br><img src='http://covers.openlibrary.org/b/isbn/"
                            +response.docs[i].isbn[0]+"-M.jpg'><br>"
                    }
                })
            }
            
            return(
                    <div className="Explore">
                        <input id="input"/> 
                            <button className="success" onClick={getBooks}> Get Books </button>
                        <div id="output"></div>
                    </div>
            );   
    }
}

export default Explore;