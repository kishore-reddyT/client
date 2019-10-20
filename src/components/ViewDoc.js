import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
var pos={
    position:"relative",
    //left:"50%",
    //top:"50%",
    //transform:"translate(-25%,0)"
}
class ViewDoc extends Component{
    state={
        id:null,
        email:'',
        fullName:'',
        specialization:'',
        worksat:''
    }
    componentDidMount(){
      
        axios.get("http://localhost:5000/doctors/"+this.props.match.params.doc_id)
        .then(user=>{
            this.setState(
                {
                    email:user.data.email,
                    fullName:user.data.fullName,
                    specialization:user.data.specialization,
                    worksat:user.data.worksat
                }
            )
        })
        .catch(err=>{
            alert(err);
        })
        console.log("Hello");

         const M=window.M;
         var elems = document.querySelectorAll('.datepicker');
         var instances = M.Datepicker.init(elems, {autoClose:true});
         var elems1 = document.querySelectorAll('.timepicker');
         var instances1 = M.Timepicker.init(elems1, {autoClose:true});
    }
    render()
    {
        return(
          <React.Fragment>
                  <div className="container">
                  <div className="row" style={pos}>
                  <div className="col s12 m7 ">
                  <h2 className="header">Book the Doctor</h2>
                  <div className="card horizontal z-depth-3">
                  <div className="card-stacked">
                  <div className="card-content">
                    <table >
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td>{this.state.fullName}</td>
                      </tr>
                      <tr>
                        <td>Email:</td>
                        <td>{this.state.email}</td>
                      </tr>
                      <tr>
                        <td>Specialization:</td>
                        <td>{this.state.specialization}</td>
                      </tr>
                      <tr>
                        <td>Work Address:</td>
                        <td>{this.state.worksat}</td>
                      </tr>
                      <tr>
                        <td>Select a Date</td>
                        <td><input type="text" className="datepicker" name="Date" onClick={this.reload}/></td>
                      </tr>
                      <tr>
                        <td>Select Time</td>
                        <td>  <input type="text" name="time" class="timepicker"/></td>
                      </tr>
                    </tbody>
            </table>
              </div>
              <div className="card-action">
                <span className="btn small indigo">Book Now</span>
              </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            </React.Fragment>
        )
    }
}
export default ViewDoc;