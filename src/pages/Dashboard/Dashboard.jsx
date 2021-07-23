import React from 'react';
import "./Dashboard.css"
import Accordion  from './Accordion';
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state={accordionOpened:null}
        this.toggleAccordionOpened = this.toggleAccordionOpened.bind(this);
      }
      toggleAccordionOpened (accordion) {
        if (this.state.accordionOpened === accordion) {
          this.setState({accordionOpened:null});
        } else {
          this.setState({accordionOpened:accordion});
        }
      };
   
    render() {
      return (
         <div className="dashboard-main-page-container d-flex flex-row">
             <div className="side-nav-div">
                <div className="d-flex flex-row company-logo-div">
                    <img src="images/companylogo.svg" alt="error"/>
                    <p>Company</p>
                </div>
                <div className="side-nav-button-div d-flex flex-column">
                    <button className="nav-dash-button text-left"><i class="fad fa-th-large pr-2"></i>Dashboard</button>
                    <button className="nav-button text-left"><i class="fas fa-briefcase pr-2"></i>Tasks</button>
                    <button className="nav-button text-left"><i class="fas fa-chart-line pr-2"></i>Performance</button>
                    <button className="nav-button text-left"><i class="fas fa-file-invoice-dollar pr-2"></i>Earnings</button>
                    <button className="nav-button text-left"><i class="fas fa-user pr-2"></i>Profile</button>
                </div>
                <div style={{fontSize: "12px",color:"#9DA7BD"}} className="my-5">
                    <p className="pb-1">Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div>
             </div>
             <div className="user-information-div">
                <div className="d-flex flex-row justify-content-end user-nav-div ">
                    <div className="d-flex flex-row px-4">
                        <p style={{fontSize: "17px",color: "#262626"}}>2500</p>
                        <p className="pl-3" style={{fontSize: "17px",fontWeight:"600",color: "#5E6C84"}}>XP</p>
                    </div>
                    <div  className="d-flex flex-row px-4">
                        <p style={{fontSize: "17px",color: "#262626"}}>255</p>
                        <p className="pl-3" style={{fontSize: "17px",fontWeight:"600",color: "#5E6C84"}}>INR(₹)</p>
                    </div>
                    <div  className="px-3">
                        <i className="far fa-bell"></i>
                    </div>
                    <div  className="px-3">
                        <div className="user-img-name-div d-flex flex-row pl-3">
                            <p style={{fontSize: "14px",color:"#25252D",padding:"6%  0%" ,margin:"0% 16% 0% 0%" }}>Nishita</p>
                            <img src="images/userimg.png" alt="error"/>
                        </div>
                    </div>    
                </div>
                <div class="user-activity-main-container">
                        <p className="greeting-text">Welcome Back, Nishita</p>
                        <div className="container mx-0 px-0">
                            <div className="row py-2">
                                <div className="col-8">
                                    <div className="d-flex flex-row">
                                        <div className="priority-card">
                                            <div className="cross-file-con-div pt-3 pl-4"><i className="fad fa-file-times fa-2x"></i></div>
                                            <p  className="py-2" style={{fontWeight: "bold",fontSize:"22px"}}>See Whats's on Priority?</p>
                                            <div className="d-flex flex-row">
                                                <p>Complete <span style={{color:"#F53D6B"}}>12 rejected questions</span> to earn <span style={{color:"#F53D6B"}}>₹30/q</span></p>
                                                <i className="fas fa-arrow-right pt-1 ml-auto" style={{color:"#F53D6B"}}></i>
                                            </div>
                                           
                                        </div>
                                        <div className="next-task-card">
                                            <div className="plus-file-con-div pt-3 pl-4"><i className="fad fa-file-plus fa-2x"></i></div>
                                            <p  className="pt-3 pb-2" style={{fontSize:"14px" ,color:"#9999AD"}}>New Tasks</p>
                                            <div className="d-flex flex-row">
                                                <p style={{fontWeight: "bold",fontSize:"22px" ,color:"#25252D"}}>12</p>
                                                <i className="fas fa-arrow-right pt-2 ml-auto" style={{color:"#00BA88"}}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="assignment-progress-div mt-4">
                                        <p  className="py-2" style={{fontWeight: "bold",fontSize:"22px"}}>Complete tasks to start at Syllabify!</p>
                                        <div className="d-flex flex-row">
                                                <p  className="pt-1" style={{fontSize:"16px" ,color:"#6E6E86"}}>Select one to proceed</p>
                                                <p className="pt-1 ml-auto" style={{fontWeight:"600",fontSize:"16px",color:"#8759F2" ,pointer:"cursor"}}>View All</p>
                                        </div>
                                            <hr style={{color:"#E6E6EA",height:"2px"}}></hr>
                                            <p style={{color:"#6E6E86",fontSize:"16px"}}>FRIDAY : 22nd March</p>
                                        <div className="assignment-card d-flex flex-row mt-2">
                                            <div className="key-icon"><i className="fas fa-key m-3" style={{color:"#F53D6B"}}></i></div>
                                            <div className="mx-auto">
                                                <p style={{fontWeight:"600",fontSize:"16px",color:"#25252D"}}>Assignment #12</p>
                                                <p style={{fontSize:"14px",color:"#25252D"}}>Physics <span style={{color:"#97A0AF"}}>(IIT-JEE) <i class="fas fa-info-circle"></i></span> </p>
                                            </div>
                                            <div className="mx-auto">
                                                <p style={{fontSize:"14px",color:"#25252D"}}>₹ 25/q</p>
                                                <p style={{fontSize:"14px",color:"#97A0AF"}}>15 questions</p>
                                            </div>
                                            <div className="assignment-status-div mx-auto mt-1 py-1 px-4 h-25 d-flex flex-row " style={{color:"#00BA88", background:"#DBF3ED"}}>
                                                <i class="fas fa-user-circle pt-1 pr-2"></i>
                                                <p>Assigned</p>
                                            </div>
                                            <div className="mr-2">
                                                <button className="assignment-continue-button">
                                                    Continue
                                                </button>
                                            </div>
                                        </div>
                                        <div className="assignment-card d-flex flex-row mt-1">
                                            <div className="key-icon"><i className="fas fa-key m-3" style={{color:"#F53D6B"}}></i></div>
                                            <div className="mx-auto">
                                                <p style={{fontWeight:"600",fontSize:"16px",color:"#25252D"}}>Assignment #15</p>
                                                <p style={{fontSize:"14px",color:"#25252D"}}>Physics<span style={{color:"#97A0AF"}}>(IIT-JEE) <i class="fas fa-info-circle"></i></span></p>
                                            </div>
                                            <div className="mx-auto">
                                                <p style={{fontSize:"14px",color:"#25252D"}}>₹ 25/q</p>
                                                <p style={{fontSize:"14px",color:"#97A0AF"}}>15 questions</p>
                                            </div>
                                            <div className="assignment-status-div mx-auto mt-1 py-1 px-2 h-25 d-flex flex-row " style={{color:"#E49F1E", background:"rgba(250, 181, 52, 0.25)"}} >
                                                <i class="fas fa-check-circle pt-1 pr-2"></i>
                                                <p>70% Completed</p>
                                            </div>
                                            <div className="mr-2">
                                                <button className="assignment-continue-button">
                                                    Continue
                                                </button>
                                            </div>
                                        </div>
                                        <div className="assignment-card d-flex flex-row mt-1">
                                            <div className="key-icon"><i className="fas fa-key m-3" style={{color:"#F53D6B"}}></i></div>
                                            <div className="mx-auto">
                                                <p style={{fontWeight:"600",fontSize:"16px",color:"#25252D"}}>Assignment #12</p>
                                                <p style={{fontSize:"14px",color:"#25252D"}}>Physics<span style={{color:"#97A0AF"}}>(IIT-JEE) <i class="fas fa-info-circle"></i></span></p>
                                            </div>
                                            <div className="mx-auto">
                                                <p style={{fontSize:"14px",color:"#25252D"}}>₹ 25/q</p>
                                                <p style={{fontSize:"14px",color:"#97A0AF"}}>15 questions</p>
                                            </div>
                                            <div className="assignment-status-div mx-auto mt-1 py-1 px-2 h-25 d-flex flex-row " style={{color:"#F53D6B", background:"rgba(245, 61, 107, 0.2)"}}>
                                                <i class="fas fa-times-circle pt-1 pr-2"></i>
                                                <p>Rejected(1/15)</p>
                                            </div>
                                            <div className="mr-2">
                                                <button className="assignment-continue-button">
                                                    Continue
                                                </button>
                                            </div>
                                        </div>
                                        <div className="assignment-card d-flex flex-row mt-1">
                                            <div className="key-icon"><i className="fas fa-key m-3" style={{color:"#F53D6B"}}></i></div>
                                            <div className="mx-auto">
                                                <p style={{fontWeight:"600",fontSize:"16px",color:"#25252D"}}>Assignment #12</p>
                                                <p style={{fontSize:"14px",color:"#25252D"}}>Physics<span style={{color:"#97A0AF"}}>(IIT-JEE) <i class="fas fa-info-circle"></i></span></p>
                                            </div>
                                            <div className="mx-auto">
                                                <p style={{fontSize:"14px",color:"#25252D"}}>₹ 25/q</p>
                                                <p style={{fontSize:"14px",color:"#97A0AF"}}>15 questions</p>
                                            </div>
                                            <div className="assignment-status-div mx-auto mt-1 py-1 px-4 h-25 d-flex flex-row " style={{color:"#00BA88", background:"#DBF3ED"}}>
                                                <i class="fas fa-user-circle pt-1 pr-2"></i>
                                                <p>Assigned</p>
                                            </div>
                                            <div className="mr-2">
                                                <button className="assignment-continue-button">
                                                    Continue
                                                </button>
                                            </div>
                                        </div>
                                        <div className="assignment-card d-flex flex-row mt-1">
                                            <div className="key-icon"><i className="fas fa-key m-3" style={{color:"#F53D6B"}}></i></div>
                                            <div className="mx-auto">
                                                <p style={{fontWeight:"600",fontSize:"16px",color:"#25252D"}}>Assignment #12</p>
                                                <p style={{fontSize:"14px",color:"#25252D"}}>Physics<span style={{color:"#97A0AF"}}>(IIT-JEE) <i class="fas fa-info-circle"></i></span></p>
                                            </div>
                                            <div className="mx-auto">
                                                <p style={{fontSize:"14px",color:"#25252D"}}>₹ 25/q</p>
                                                <p style={{fontSize:"14px",color:"#97A0AF"}}>15 questions</p>
                                            </div>
                                            <div className="assignment-status-div mx-auto mt-1 py-1 px-4 h-25 d-flex flex-row " style={{color:"#E49F1E", background:"rgba(250, 181, 52, 0.25)"}}>
                                                <i class="fas fa-check-circle pt-1 pr-2"></i>
                                                <p>Completed</p>
                                            </div>
                                            <div className="mr-2">
                                                <button className="assignment-continue-button">
                                                    Continue
                                                </button>
                                            </div>
                                        </div>
                                        <div className="assignment-card d-flex flex-row mt-1">
                                            <div className="key-icon"><i className="fas fa-key m-3" style={{color:"#F53D6B"}}></i></div>
                                            <div className="mx-auto">
                                                <p style={{fontWeight:"600",fontSize:"16px",color:"#25252D"}}>Assignment #12</p>
                                                <p style={{fontSize:"14px",color:"#25252D"}}>Physics<span style={{color:"#97A0AF"}}>(IIT-JEE) <i class="fas fa-info-circle"></i></span></p>
                                            </div>
                                            <div className="mx-auto">
                                                <p style={{fontSize:"14px",color:"#25252D"}}>₹ 25/q</p>
                                                <p style={{fontSize:"14px",color:"#97A0AF"}}>15 questions</p>
                                            </div>
                                            <div className="assignment-status-div mx-auto mt-1 py-1 px-2 h-25 d-flex flex-row " style={{color:"#F53D6B", background:"rgba(245, 61, 107, 0.2)"}}>
                                                <i class="fas fa-times-circle pt-1 pr-2"></i>
                                                <p>Rejected(1/15)</p>
                                            </div>
                                            <div className="mr-2">
                                                <button className="assignment-continue-button">
                                                    Continue
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="best-practices-div mt-4">
                                    <p style={{fontWeight:"bold",fontSize:"22px",color:"#25252D"}}>Best Practices</p>
                                    <Accordion
                                        accordionOpened={this.state.accordionOpened}
                                        setAccordionOpened={this.toggleAccordionOpened}
                                        title="Tips for Meta-tagging solutions "
                                       
                                    /> 
                                    <Accordion
                                        accordionOpened={this.state.accordionOpened}
                                        setAccordionOpened={this.toggleAccordionOpened}
                                        title="Tips for Solving Questions"
                                       
                                    />  
                                     <Accordion
                                        accordionOpened={this.state.accordionOpened}
                                        setAccordionOpened={this.toggleAccordionOpened}
                                        title="How many Seats are available"
                                       
                                    />
                                     <Accordion
                                        accordionOpened={this.state.accordionOpened}
                                        setAccordionOpened={this.toggleAccordionOpened}
                                        title="Strategies for error finding"
                                       
                                    />   
                                     <Accordion
                                        accordionOpened={this.state.accordionOpened}
                                        setAccordionOpened={this.toggleAccordionOpened}
                                        title="How to make video solutions"
                                       
                                    />    
                                    </div>
                                </div>
                                <div className="col-4">
                                        <div className="ballance-card p-3 d-flex flex-row">
                                            <img src="images/rupeeimg.png" alt="error"/>
                                            <p style={{fontWeight: "600",fontSize:"22px " ,paddingLeft:"10px"}}>255</p>
                                            <p className="ml-auto" style={{fontSize:"17px",color:"#5E6C84"}}>INR(₹)</p>
                                        </div>
                                        <div className="progress-card p-3 mt-3">
                                            <div className="d-flex flex-row">
                                                <p style={{fontWeight:"bold",fontSize:"22px"}}>Points Progress</p> 
                                                <div className="d-flex flex-row ml-auto edit-icon-div pt-1">
                                                    <i className="fas fa-pencil-alt pt-1"></i>
                                                    <p>Edit Goal</p>
                                                </div>
                                           </div>
                                           <div className="progress-card-sta-div mb-2">
                                                <div className="d-flex flex-row " style={{fontWeight:"600",fontSize:"14px",color:"#FFFFFF"}}>
                                                    <i className="far fa-calendar-alt pt-1 pr-1"></i>
                                                    <p>Daily Goal</p>
                                                </div>
                                                <div>
                                                    <p style={{fontSize:"14px",color:"#FFFFFF"}}><span style={{fontWeight:"600",fontSize:"19px"}}>120</span>/300 XP</p>
                                                </div>
                                               
                                           </div>
                                           <div className="d-flex flex-row" style={{fontSize:"20px",color:"#262626"}}>
                                                    <i class="far fa-angle-left pt-1"></i>
                                                    <p className="mx-auto">This Week</p>
                                                    <i class="far fa-angle-right pt-1"></i>
                                            </div>
                                            <div className="d-flex flex-row p-2">
                                                <div className="d-flex flex-column ml-4 pl-2">
                                                    <div className="progress-bar1">
                                                    <div className="progress-bar ">
                                                    
                                                    </div>
                                                    </div>
                                                    <p style={{fontSize:"10px",color:"#887F9C"}} >M</p>
                                                </div>
                                                <div className="d-flex flex-column ml-4 pl-2">
                                                    <div>
                                                        <div className="progress-bar">
                                                        </div>
                                                    </div>
                                                    <p style={{fontSize:"10px",color:"#887F9C"}} >T</p>
                                                </div>
                                                <div className="d-flex flex-column ml-4 pl-2">
                                                    <div className="progress-bar">
                                                    </div>
                                                    <p style={{fontSize:"10px",color:"#887F9C"}} >W</p>
                                                </div>
                                                <div className="d-flex flex-column ml-4 pl-2">
                                                    <div className="progress-bar">
                                                    </div>
                                                    <p style={{fontSize:"10px",color:"#887F9C"}} >T</p>
                                                </div>
                                                <div className="d-flex flex-column ml-4 pl-2">
                                                    <div className="progress-bar">
                                                    </div>
                                                    <p style={{fontSize:"10px",color:"#887F9C"}} >F</p>
                                                </div>
                                                <div className="d-flex flex-column ml-4 pl-2">
                                                    <div className="progress-bar">
                                                    </div>
                                                    <p style={{fontSize:"10px",color:"#887F9C"}} >S</p>
                                                </div>
                                                <div className="d-flex flex-column ml-4 pl-2">
                                                    <div className="progress-bar">
                                                    </div>
                                                    <p style={{fontSize:"10px",color:"#887F9C"}} >S</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="leader-board-card  p-3 mt-4">
                                            <p style={{fontWeight:"bold",fontSize:"22px",color:"#25252D"}}>Leaderboard </p> 
                                            <div className="d-flex flex-row mt-3"> 
                                                <img src="images/gold.png" alt="error" style={{height:"80%",paddingTop:"2%"}}/>
                                                <div className="d-flex flex-row ml-4">
                                                    <img src="images/lead1.png" alt="error" />
                                                    <p>Vinayak J</p>
                                                </div>
                                                <p className="ml-auto" >65367 XP</p>
                                            </div> 
                                            <hr></hr>
                                            <div className="d-flex flex-row mt-3"> 
                                                <img src="images/silver.png" alt="error" style={{height:"80%",paddingTop:"2%"}}/>
                                                <div className="d-flex flex-row ml-4">
                                                    <img src="images/lead2.png" alt="error" />
                                                    <p>Vinayak J</p>
                                                </div>
                                                <p className="ml-auto" >65299 XP</p>
                                            </div> 
                                            <hr></hr>
                                            <div className="d-flex flex-row mt-3"> 
                                                <img src="images/bronze.png" alt="error" style={{height:"80%",paddingTop:"2%"}}/>
                                                <div className="d-flex flex-row ml-4">
                                                    <img src="images/lead3.png" alt="error" />
                                                    <p>Vinayak J</p>
                                                </div>
                                                <p className="ml-auto" >63658 XP</p>
                                            </div> 
                                            <hr></hr>
                                            <div className="d-flex flex-row mt-3"> 
                                                {/* <img src="images/gold.png" alt="error" style={{height:"80%",paddingTop:"2%"}}/> */}
                                                <p>04</p>
                                                <div className="d-flex flex-row ml-4">
                                                    <img src="images/lead4.png" alt="error" />
                                                    <p>Vinayak J</p>
                                                </div>
                                                <p className="ml-auto" >61986 XP</p>
                                            </div> 
                                            <hr></hr>
                                            <div className="d-flex flex-row mt-3"> 
                                                {/* <img src="images/gold.png" alt="error" style={{height:"80%",paddingTop:"2%"}}/> */}
                                                <p>05</p>
                                                <div className="d-flex flex-row ml-4">
                                                    <img src="images/lead5.png" alt="error" />
                                                    <p>Vinayak J</p>
                                                </div>
                                                <p className="ml-auto" >60003 XP</p>
                                            </div> 
                                            <hr></hr>
                                            <div className="d-flex flex-row mt-3"> 
                                                {/* <img src="images/gold.png" alt="error" style={{height:"80%",paddingTop:"2%"}}/> */}
                                                <p>06</p>
                                                <div className="d-flex flex-row ml-4">
                                                    <img src="images/lead6.png" alt="error" />
                                                    <p>Vinayak J</p>
                                                </div>
                                                <p className="ml-auto" >59979 XP</p>
                                            </div> 
                                            <hr></hr>
                                            <div className="d-flex flex-row mt-3"> 
                                                {/* <img src="images/gold.png" alt="error" style={{height:"80%",paddingTop:"2%"}}/> */}
                                                <p>07</p>
                                                <div className="d-flex flex-row ml-4">
                                                    <img src="images/lead7.png" alt="error" />
                                                    <p>Vinayak J</p>
                                                </div>
                                                <p className="ml-auto" >59237 XP</p>
                                            </div> 
                                           
                                            <div className="d-flex flex-row mt-3 user-rank-card mt-2"> 
                                                {/* <img src="images/gold.png" alt="error" style={{height:"80%",paddingTop:"2%"}}/> */}
                                                <p>134</p>
                                                <div className="d-flex flex-row ml-4">
                                                    <img src="images/lead8.png" alt="error" />
                                                    <p>Vinayak J</p>
                                                </div>
                                                <p className="ml-auto" >2500 XP</p>
                                            </div> 
                                           <button className="rank-show-button">View All Ranking</button>
                                            
                                        </div>
                                        <div className="contactus-card  p-3 mt-4">
                                            <p style={{fontWeight:"bold",fontSize:"22px",color:"#25252D"}}>Contact Us</p> 
                                            <div className="d-flex flex-row mt-2">
                                                <i className="fas fa-phone-alt pt-2"></i>
                                                <div className="pl-2">
                                                <p>+919986 756 4364</p>
                                                <p>020 - 27656769</p>
                                                </div>
                                                
                                            </div>
                                            <div className="d-flex flex-row mt-2">
                                                <i className="fas fa-envelope-open pt-1"></i>
                                                <p className="pl-2">support@syllabifi.com</p>
                                            </div>
                                            <div className="mt-2">
                                                <p>Follow us</p>
                                                <div className="d-flex flex-row py-2">
                                                <i class="fab fa-facebook pr-2"></i>
                                                <i class="fab fa-twitter-square px-2"></i>
                                                <i class="fab fa-instagram px-2"></i>
                                                <i class="fab fa-linkedin pl-2"></i>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                </div>
             </div>
        </div>
      );
    }
  }

export default Dashboard;