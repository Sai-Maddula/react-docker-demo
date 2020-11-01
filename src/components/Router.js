import React from "react";
import {Switch,Route} from "react-router-dom"
import About from "./About";
import Home from "./Home";

class Router extends React.Component{

    render(){
        return(
        <Switch>
            <Route exact path="/" component={Home}/> 
            <Route path="/about" component={About}/>
            <Route component={Home}/>
        </Switch>
        )
    }
}

export default Router;