import React from 'react';
import "./StepSubject.css"
class StepSubject extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  
        subjects: [  
          {id: 1, subject: "Mathematics"},  
          {id: 2, subject: "Chemistry"},  
          {id: 3, subject: "Physics"},  
          {id: 4, subject: "Biology"},
          {id: 5, subject: "Locicalreasoning"},
          {id: 6, subject: "others"}

        ],  
        selectedsubject: [],
      };  
      this.handleChange = this.handleChange.bind(this);  
      this.handleSubmit = this.handleSubmit.bind(this);  
    }
    handleChange(id) {  
        let selected = this.state.selectedsubject
        // instead of using indexOf, we can use findIndex to look through array of objects
        let find = selected.findIndex(item => item.id === id)
      
        if(find > -1) {
          selected.splice(find, 1)
        } else {
          // We can use find to get the item based on its id
          selected.push(this.state.subjects.find(item => item.id === id))
        }
      
        this.setState({ selectedsubject:selected})  
  } 
  handleSubmit(event) {  
    console.log(this.state.selectedsubject);  
    event.preventDefault();  
  }  
   
    render() {
      return (
        <div className="subject-page-main">
            <div className="subject-main-container">
            <div className="progress-div d-flex flex-row justify-content-center pb-5 pt-2">
            <div class="circle-current"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>

            </div>
             <h3>
                 What subject do you specialise in?
             </h3>
             <p>You can add more than one subject</p>
             <form onSubmit={this.handleSubmit}>
                <div className="container my-4">
                    <div className="row pt-5">
                        <div className="col-3 subject-card d-flex flex-row">
                            <img src="images/math.png" alt="error"/>
                             <p>Mathematics</p>
                             <input  
                                type="checkbox"  
                                onChange={ () => this.handleChange(1) }
                                selected={ this.state.selectedsubject.includes(1)}  
                            />
                        </div>
                        <div className="col-1">
                        </div>
                        <div className="col-3 subject-card  d-flex flex-row">
                        <img src="images/chemistry.png" alt="error"/>
                        <p>Chemistry</p>
                        <input  
                                type="checkbox"  
                                onChange={ () => this.handleChange(2) }
                                selected={ this.state.selectedsubject.includes(2)}  
                            />
                        </div>
                        <div className="col-1">
                        </div>
                        <div className="col-3 subject-card d-flex flex-row">
                        <img src="images/physics.png" alt="error"/>
                        <p>Physics</p>
                        <input  
                                type="checkbox"  
                                onChange={ () => this.handleChange(3) }
                                selected={ this.state.selectedsubject.includes(3)}  
                            />
                        </div>
                    </div>
                    <div className="row  py-5">
                        <div className="col-3 subject-card d-flex flex-row">
                        <img src="images/biology.png" alt="error"/>
                        <p>Biology</p>
                        <input  
                                type="checkbox"  
                                onChange={ () => this.handleChange(4) }
                                selected={ this.state.selectedsubject.includes(4)}  
                            />
                        </div>
                        <div className="col-1">
                        </div>
                        <div className="col-3 subject-card  d-flex flex-row">
                        <img src="images/logicalresoning.png" alt="error"/>
                        <p>Logical Reasoning</p>
                        <input  
                                type="checkbox"  
                                onChange={ () => this.handleChange(5) }
                                selected={ this.state.selectedsubject.includes(5)}  
                            />
                        </div>
                        <div className="col-1">
                        </div>
                        <div className="col-3 subject-card d-flex flex-row">
                        <img src="images/others.png" alt="error"/>
                        <p>Others</p>
                        <input  
                                type="checkbox"  
                                onChange={ () => this.handleChange(6) }
                                selected={ this.state.selectedsubject.includes(6)}  
                            />
                        </div>
                    </div>
                </div>    
        </form> 
        <div className="d-flex flex-row">
            <button className="prev-button" onClick={()=>{this.props.onPrevious()}}>Previous</button>
            <div className="next-skip-button-div ml-auto">
            <button className="skip-button" onClick={()=>{this.props.onNext()}}>Skip</button>
            <button className="next-button" onClick={()=>{this.props.onNext()}}>Next</button>
            </div>
        </div>
        </div>
        
        </div>
      );
    }
  }

export default StepSubject;