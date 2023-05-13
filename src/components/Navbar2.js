
import React ,{ Component } from "react";
import logo from "../img/Vector.png";

//class Navbar2 extends React.Component{}  ya da asagidaki gibi yazilabilir.

class Navbar2 extends Component{

    render(){
        return(
            <nav className="nav">
            <img src={logo}/>

        </nav>

        )
    }

}

export default Navbar2 // diger yerlerde ulasilabilir olmasi için, class li yapi zaten uzun oldugu için yukari beraber yazilmaz

