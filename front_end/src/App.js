//import "./App.css";
import { Component } from "react";
import { BrowserRouter, Route} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home"
import About from "./components/About";
import FavoriteBooks  from "./components/FavoriteBooks";
import RecommendedBooks from "./components/RecommendedBooks"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Authors from "./components/Authors"
import Explore from "./components/Explore";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <NavBar/>
          <Route  exact path="/home" component={Home} />
          <Route  exact path="/about" component={About} />
          <Route  exact path="/favorite-books" component={FavoriteBooks} />
          <Route  exact path="/recommended-books" component={RecommendedBooks} />
          <Route  exact path="/authors" component={Authors} /> 
          <Route  exact path="/login" component={Login} />
          <Route  exact path="/sign-up" component={SignUp} />
          <Route  exact path="/explore" component={Explore} />
          <Route  exact path="/search" component={Search} />
      </BrowserRouter>
       
    );
  }
}

export default App;

