import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';
class Login extends Component{
    state={
        username:'',
        password:''
    }
    changeText=(e)=>{
        this.setState({
        [e.target.id]:e.target.value
        })
    }
    submitHandler=(e)=>{
        //e.preventDefault();
        axios.post("http://localhost:5000/patients/LoginPatient",this.state)
        .then(user=>{
            if(user.data==='invalid username or password')
            {
                //alert(user.data);
                //return;
                axios.post("http://localhost:5000/doctors/LoginDoctor",this.state)
                .then(doctor=>{
                    if(doctor.data==='invalid username or password')
                    {
                        alert(doctor.data);
                    }
                    else
                    {
                        this.props.Authenticate(doctor.data.name.first_name,doctor.data.name.last_name,doctor.data.type);
                        cookie.save('username',doctor.data.username,{path:'/'});
                        cookie.save('type',doctor.data.type,{path:'/'});
                        cookie.save('Authenthication','true',{path:'/'});
                        cookie.save('firstName',doctor.data.name.first_name,{path:'/'});
                        cookie.save('lastName',doctor.data.name.last_name,{path:'/'});
                        this.props.history.push("/Home");
                    }
                })
                .catch(err=>{
                    console.log(err);
                    alert('unable to connect to doctor database');
                })
            }
            else{
                this.props.Authenticate(user.data.name.first_name,user.data.name.last_name,user.data.type);
                cookie.save('username',user.data.username,{path:'/'});
                cookie.save('type',user.data.type,{path:'/'});
                cookie.save('Authenthication','true',{path:'/'}); 
                cookie.save('firstName',user.data.name.first_name,{path:'/'});
                cookie.save('lastName',user.data.name.last_name,{path:'/'});
                //this.props.history.push("/Home");
            }
        })
        .catch(err=>{
            console.log(err);
            alert(err);
        })
    }
    render()
    {
        return(
        <React.Fragment>
            <div className="container">
            <div className="row">
            <div className="col s12 l5">
                <h2 className="indigo-text text-darken-4">Login</h2>
                <form action="/Home" onSubmit={this.submitHandler}>
                    <div className="input-field">
                        <i className="material-icons prefix">person</i>
                    <input type="text" id="username" required onChange={this.changeText}/>
                    <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">lock</i>
                        <input type="password" id="password" required onChange={this.changeText}/>
                        <label htmlFor="password">Enter the password</label>
                        <button className="btn" type="submit">Login</button> 
                        <Link to="/Register">Not a Member <span className="btn small right">Register</span></Link>
                    </div>
                </form>
            </div>
            </div>
            </div>
        </React.Fragment>
        )
    }
}
export default Login;