import React,{Component} from 'react';
import Navbar from './components/Navbar.js';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/Home';
import ViewMedicine from './components/ViewMedicine';
import FindDoctor from './components/FindDoctor';
import Footer from './components/Footer';
import Login from './components/login';
import PatientRegistration from './components/PatientRegistration';
import ViewDoc from './components/ViewDoc'
class App extends Component{
  state={
    Authentication:false,
    first_name:'',
    last_name:'',
    type:''
  }
  Authenticate=(fname,lname,typeofaccount)=>{
    this.setState({
      Authentication:true,
      first_name:fname,
      last_name:lname,
      type:typeofaccount
    });
  }
  render(){
    //console.log(this.state.Authentication);
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar Authentication={this.state} />
        <Route exact path='/' render={(props)=><Login {...props} Authenticate={this.Authenticate}/>}/>
        <Route path='/Register' component={PatientRegistration}/>
        <Route path='/Home' component={Home}/>
        <Route path='/ViewMed' component={ViewMedicine}/>
        <Route path='/FindDoctor' component={FindDoctor}/>
        <Route path="/doctors/:doc_id" component={ViewDoc}/>
        <Footer/>
      </div>
      </BrowserRouter>
    );
    }
}
export default App;
