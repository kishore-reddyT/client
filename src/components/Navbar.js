import React,{Component} from 'react';
import {NavLink,Link} from 'react-router-dom';
import cookie from 'react-cookies';
class Navbar extends Component{
    componentDidMount(){
        console.log("Hello");
    }
    render(){
        console.log(cookie.load('type'));
        console.log(cookie.load('Authenthication'))
        if(((cookie.load('type')==='patient')&&cookie.load('Authenthication')==='true')){
            const initials=(cookie.load('firstName')[0]+cookie.load('lastName')[0]).toUpperCase();
    return(
        <div>
        <nav className="nav-wrapper indigo">
            <div className="container">
                <Link to="" className="brand-logo">E-Swasth</Link>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/FindDoctor">Find Doctor</NavLink></li>
                    <li><NavLink to="/ViewMed">View Medicine</NavLink></li>
                    <li><NavLink to="/Details" className="btn-floating red darken-1 center-align z-depth-0">{initials}</NavLink></li>
                </ul>
            </div>
        </nav>
        </div>
        )
    }
    else if((cookie.load('type'==='doctor')&&cookie.load('Authenthication')==='true'))
    {
        const initials=((cookie.load('firstName')[0]+cookie.load('lastName')[0])).toUpperCase();
        return(
             <div>
        <nav className="nav-wrapper indigo">
            <div className="container">
                <Link to="" className="brand-logo">E-Swasth</Link>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/Home">Home</NavLink></li>
                    <li><NavLink to="/">View Todays Slots</NavLink></li>
                    <li><NavLink to="/">Find Patient</NavLink></li>
                    <li><NavLink to="/">Upload prescription</NavLink></li>
                    <li><NavLink to="/" className="btn-floating red darken-1 center-align z-depth-0">{initials}</NavLink></li>
                </ul>
            </div>
        </nav>
        </div>
        )
    }
    else
    {
        return(
            <div>
            <nav className="nav-wrapper indigo">
            <div className="container">
                <span className="brand-logo">Welcome to E-Swasth</span></div>
                </nav>
            </div>
        )
    }
    }
}
export default Navbar;