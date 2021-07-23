import React from 'react';
import {Link} from 'react-router-dom'
import showPwdImg from './images/show-password.svg';
import hidePwdImg from './images/hide-password.svg';
import { GoogleLogin } from 'react-google-login'
import "./StepNameEmail.css"
class StepNameEmail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',email:'',password:'',confirmpassword:'',isRevealPwd:false};
      
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleChangeConfirmpassword = this.handleChangeConfirmpassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChangeName(event) {
      this.setState({name: event.target.value});
    }
    handleChangeEmail(event){
        this.setState({email: event.target.value});
    }
    handleChangePassword(event){
        this.setState({password: event.target.value});
    }
    handleChangeConfirmpassword(event){
        this.setState({confirmpassword: event.target.value});
    }
  
    handleSubmit(event) {
      alert(`A name ,email, password was submitted: ${this.state.name} ${this.state.email} ${this.state.password}`);
      this.props.onNext();
      event.preventDefault();
    

    }
    googleSuccess = async (res) => {
        console.log(res)
        const result = res?.profileObj;  // optional chaingin operator

        try{
            const min = 100000;
            const max = 100000000;
            const rand = (min + Math.random() * (max - min));
            const data = {
                email : result.email,
                password : rand,
                name : result.name,
            }
            this.setState({name:data.name,email:data.email,password:data.password,confirmpassword:data.password });
            alert(`A name ,email, password was submitted: ${this.state.name} ${this.state.email} ${this.state.password}`);
            this.props.onNext();

        }   
        catch(error){
            alert(error);
        }
    }

    googleFailure = (error) => {
        alert(error);
        console.log('google signup failed')
    }
    

    render() {
      return (
        <div className="registration-page-main">

            <div className="registration-page-main-container">
      
              <div className="container">
                <div className="row">
                    <div className="col-7">
                        <img src="./images/loginimg.png" alt="error"/>
                    </div>
                <div className="col-5">
                    <div className="d-flex flex-row ">
                        <img className="company-logo" src="images/companylogo.svg" alt="company-logo"/>
                        <h2 className="p-2">Company</h2>
                    </div>
                    <h4 className="py-3">Register</h4>
                    <form onSubmit={this.handleSubmit} style={{color:"#25252D"}}>
                    
                    <div className="form-group">
                        <label for="inputName">Name</label>
                        <input type="text" value={this.state.name} onChange={this.handleChangeName}  className="form-control" placeholder="Enter full name" id="inputName"/>
                    </div>
                    <div className="form-group">
                    <label for="inputEmail">Email</label>
                        <input type="text" value={this.state.email} onChange={this.handleChangeEmail}  className="form-control" placeholder="Enter email" id="inputEmail"/>
                    </div>
                    <div className="form-group">
                    <label for="inputPassword">Create password</label>
                        <input type="password" value={this.state.password} onChange={this.handleChangePassword}  className="form-control" placeholder="Enter password" id="inputPassword"/>
                        <div className></div>
                    </div>
                    <div className="form-group">
                    <label for="inputConfirmpassword">Re-enter password</label>
                        <input type={this.state.isRevealPwd ? "text" : "password"} value={this.state.confirmpassword} onChange={this.handleChangeConfirmpassword}  className="form-control" placeholder="Re-enter password" id="inputConfirmpassword"/>
                        <img style={{cursor: "pointer",position: "absolute",width: "20px",marginTop:"-8%" ,marginLeft:"84%"}}
                            title={this.state.isRevealPwd ? "Hide password" : "Show password"}
                            src={this.state.isRevealPwd? hidePwdImg : showPwdImg}
                            onClick={() => this.setState({isRevealPwd: !this.state.isRevealPwd})}
                            alt="error"
                            />
                    </div>
                   
                    <div className="d-flex flex-row pt-4">
                    <div className="button-div">
                    <button className="signup-button" type="submit" >Sign Up <i className="fas fa-chevron-right"></i></button>
                    </div>
                    <div className="login-text-div">
                        <p style={{color:"#828282"}}>Already have an account ?</p>
                        <Link style={{color:"#8759F2" ,textDecoration:"none"}} to="">
                        Login here</Link>
                    </div>
                    </div>
                    </form>
                    <div className="d-flex flex-row pt-4">
                        <div >
                            <p className="signup-text-div" style={{color:"#828282"}}>Or Sign Up with </p>
                        </div>
                        <div>
                        <GoogleLogin
                            clientId="493377956250-07ig9pl7kgcrr9l63u9aopeudu21p2cf.apps.googleusercontent.com"
                            render={renderProps => (
                            <button className="google-button" onClick={renderProps.onClick} > <img src="images/googlelogo.png" alt="googlelogo"/>Google </button>
                            )}
                            onSuccess={this.googleSuccess}
                            onFailure={this.googleFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
   <div className="d-flex flex-row justify-content-center py-2" style={{color:"#828282"}}>
       <p>Privacy Policy</p>
       <i className="fas fa-circle fa-1 p-1"></i>
       <p>Terms and Conditions</p>
   </div>
</div>
      );
    }
  }

export default StepNameEmail;
