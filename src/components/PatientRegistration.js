import React,{Component} from 'react';
import axios from 'axios';
class PatientRegistration extends Component{
    state={
        first_name:'',
        last_name:'',
        password:'',
        address:'',
        username:'',
        gender:'',
        worksat:'',
        specialization:'',
        type:'patient'
    }
    changedText=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        });
    }
    changedTextRadio=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        });
    }
    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:5000/patients/RegisterPatient',this.state)
        .then(res=>{
            console.log(res);
            this.props.history.push('/');
        })
        .catch(err=>{
            console.log(err);
            alert('unable to connect to server');
        })
        
    }
    submitHandlerDoc=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:5000/doctors/RegisterDoctor',this.state)
        .then(res=>{
            console.log(res);
            this.props.history.push('/');
        })
        .catch(err=>{
            console.log(err);
            alert('unable to connect to server');
        })
        
    }
    render()
    {
        if(this.state.type==='patient')
        {
        return(
             <div className="container">
            <div className="row">
            <div className="col s12 l5">
                <h2 className="indigo-text text-darken-4">Register Here</h2>
                <form action="/" onSubmit={this.submitHandler}>
                    <div className="input-field">
                    <i className="material-icons prefix">person</i>
                    <input type="text" id="first_name" required onChange={this.changedText}/>
                    <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">person</i>
                    <input type="text" id="last_name" required onChange={this.changedText}/>
                    <label htmlFor="last_name">Last Name</label>
                    </div>
                    <div>
                    <div className="input-field">
                    <i className="material-icons prefix">person</i>
                    <input type="text" id="username" required onChange={this.changedText}/>
                    <label htmlFor="username">User Name</label>
                    </div>
                    <label>
                    <input className="with-gap" id="gender" name="gender" required type="radio" value="male" onChange={this.changedTextRadio}/>
                    <span >Male</span>
                    </label>
                    </div>
                    <div>
                    <label>
                    <input className="with-gap" id="gender1" name="gender" required type="radio"  value="female" onChange={this.changedTextRadio}/>
                    <span>Female</span>
                    </label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">email</i>
                    <input type="email" id="email" required onChange={this.changedText}/>
                    <label htmlFor="email">Your email</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">message</i>
                    <textarea name="" className="materialize-textarea" id="address" cols="30" rows="10" required onChange={this.changedText}></textarea>
                    <label htmlFor="address">Enter address</label>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">lock</i>
                    <input type="password" id="password" required onChange={this.changedText}/>
                    <label htmlFor="password">Enter the password</label>
                    </div>
                    <div>
                    <label>
                    <input className="with-gap" id="type" name="type" required type="radio" value="patient" onChange={this.changedTextRadio}/>
                    <span >Patient</span>
                    </label>
                    </div>
                    <div>
                    <label>
                    <input className="with-gap" id="type1" name="type" required type="radio"  value="doctor" onChange={this.changedTextRadio}/>
                    <span>Doctor</span>
                    </label>
                    </div>
                   
                    <br/>
                    <br/>
                    <button className="btn right" type="submit">Register</button>
                </form>
            </div>
            </div>
            </div>
        )
        }
        else
        {
            return(
                <div className="container">
               <div className="row">
               <div className="col s12 l5">
                   <h2 className="indigo-text text-darken-4">Register Here</h2>
                   <form action="/" onSubmit={this.submitHandlerDoc}>
                       <div className="input-field">
                       <i className="material-icons prefix">person</i>
                       <input type="text" id="first_name" required onChange={this.changedText}/>
                       <label htmlFor="first_name">First Name</label>
                       </div>
                       <div className="input-field">
                       <i className="material-icons prefix">person</i>
                       <input type="text" id="last_name" required onChange={this.changedText}/>
                       <label htmlFor="last_name">Last Name</label>
                       </div>
                       <div>
                       <div className="input-field">
                       <i className="material-icons prefix">person</i>
                       <input type="text" id="username" required onChange={this.changedText}/>
                       <label htmlFor="username">User Name</label>
                       </div>
                       <label>
                       <input className="with-gap" id="gender" name="gender" required type="radio" value="male" onChange={this.changedTextRadio}/>
                       <span >Male</span>
                       </label>
                       </div>
                       <div>
                       <label>
                       <input className="with-gap" id="gender1" name="gender" required type="radio"  value="female" onChange={this.changedTextRadio}/>
                       <span>Female</span>
                       </label>
                       </div>
                       <div className="input-field">
                       <i className="material-icons prefix">email</i>
                       <input type="email" id="email" required onChange={this.changedText}/>
                       <label htmlFor="email">Your email</label>
                       </div>
                       <div className="input-field">
                       <i className="material-icons prefix">message</i>
                       <textarea name="" className="materialize-textarea" id="address" cols="30" rows="10" required onChange={this.changedText}></textarea>
                       <label htmlFor="address">Enter address</label>
                       </div>
                       <div className="input-field">
                       <i className="material-icons prefix">lock</i>
                       <input type="password" id="password" required onChange={this.changedText}/>
                       <label htmlFor="password">Enter the password</label>
                       </div>
                       <div>
                       <label>
                       <input className="with-gap" id="type" name="type" required type="radio" value="patient" onChange={this.changedTextRadio}/>
                       <span >Patient</span>
                       </label>
                       </div>
                       <div>
                       <label>
                       <input className="with-gap" id="type1" name="type" required type="radio"  value="doctor" onChange={this.changedTextRadio}/>
                       <span>Doctor</span>
                       </label>
                       </div>
                       <div className="input-field">
                    <i className="material-icons prefix">person</i>
                    <input type="text" id="specialization" required onChange={this.changedText}/>
                    <label htmlFor="specialization">Specialization</label>
                    </div>
                    <div className="input-field">
                       <i className="material-icons prefix">message</i>
                       <textarea name="" className="materialize-textarea" id="worksat" cols="30" rows="10" required onChange={this.changedText}></textarea>
                       <label htmlFor="worksat">Enter work address</label>
                       </div>
                       <br/>
                       <br/>
                       <button className="btn right" type="submit">Register</button>
                   </form>
               </div>
               </div>
               </div>
           )
        }
    }
}
export default PatientRegistration;