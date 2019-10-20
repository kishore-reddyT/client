import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo512.png';
import cookie from 'react-cookies';
var col={
    backgroundColor:"grey",
    height:"400px"
}
class Home extends Component{
    render(){
    return(
        <React.Fragment>
            <div className="row" style={col}>
                <div className="col s12">this is an image column</div>
            </div>
        <div className="row" >
        <div className="col s12 m4">
         <div className="card ">
        <div className="card-image">
          <img src={logo} alt="not found"/>
          <span className="card-title red-text">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <Link to="#">This is a link</Link>
        </div>
      </div>
    </div>
        <div className="col s12 m4">
         <div className="card ">
        <div className="card-image">
          <img src={logo} alt="not found"/>
          <span className="card-title red-text">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <Link to="#">This is a link</Link>
        </div>
      </div>
    </div>
        <div className="col s12 m4">
         <div className="card ">
        <div className="card-image">
          <img src={logo} alt="not found"/>
          <span className="card-title red-text">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <Link to="#">This is a link</Link>
        </div>
      </div>
    </div>
  </div>
        </React.Fragment>
    );
    }
}
export default Home;