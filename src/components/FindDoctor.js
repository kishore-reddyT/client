import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
var position={
    position:"relative",
    top:"20px"
}
class FindDoctor extends React.Component{
    state={
        search:'',
        doctor:[]
    }
    changeText=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
        })

    }
    componentDidMount(){
        axios.get("http://localhost:5000/doctors/viewdocs")
        .then(doctors=>{
            this.setState({
                doctor:doctors.data
            })
        })
        .catch(err=>{
            alert(err);
        })
    }
    render(){
        const {doctor}=this.state;
        const docList=doctor.length?(
            doctor.filter((doctor)=>{
                return doctor.fullName.toLowerCase().includes(this.state.search.toLowerCase())||!this.state.search;
            }).map(doc=>{
                return(
                    <div className="post card" key={doc._id}>
                        <div className="card-content">
                            <span className="card-title">{doc.fullName}</span>
                            <p>{doc.specialization}<Link to={"/doctors/"+doc._id}><span className="btn small indigo dark 2 right">Book Now</span></Link></p>
                            <p>{doc.worksat}</p>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">no doctors yet</div>
        )
    return(
        <div className="container">
            <span className="btn-floating indigo right darken-1 center-align z-depth-0" style={position} onClick={this.getDoctor}>
                <i className="material-icons">search</i>
            </span>
            <span className="right input-field">
                <input type="text" name="search" id="search" autoComplete="off" onChange={this.changeText}/>
                <label htmlFor="search">Search Doctor</label>
            </span>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>{docList}</div>
        </div>
    )
    }
}
export default FindDoctor;