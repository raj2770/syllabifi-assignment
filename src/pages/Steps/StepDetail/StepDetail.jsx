import React from 'react';
import {Link} from 'react-router-dom'
import "./StepDetail.css"
class StepDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
          languages: [  
            {id: 1, language: "English"},  
            {id: 2, language: "Hindi"},  
            {id: 3, language: "Marathi"},  
            {id: 4, language: "Kannada"},
            {id: 5, language: "Telugu"},
            {id: 6, language: "Tamil"},
            { id: 7, language: "Kashmiri"},
            { id: 8, language: "Malayalam"},
            { id: 9, language: "French"},
            { id: 10, language: "German"},
            { id: 11, language: "Spanish"},
            { id: 12, language: "Russian"},
          ],  
          selectedlanguage: [],
          username:"",
          dailyhours:1,
          digitalinstruments:false,
        };  
        this.handleChange = this.handleChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);  
      }
      handleChange(id) {  
          let selected = this.state.selectedlanguage;
          // instead of using indexOf, we can use findIndex to look through array of objects
          let find = selected.findIndex(item =>item.id === id)
          if(find > -1) {
            selected.splice(find, 1)
          } else {
            // We can use find to get the item based on its id
            selected.push(this.state.languages.find(item => item.id === id))
          }
        
          this.setState({ selectedlanguage:selected})  
    }
   
  handleSubmit(event) {  
    console.log(this.state.dailyhours);  
    event.preventDefault();  
  }  
   
    render() {
      return (
        <div className="details-page-main">
            <div className="details-main-container">
            <div className="progress-div d-flex flex-row justify-content-center pb-5 pt-2">
            <div class="circle-complete"></div>
            <div class="circle-complete"></div>
            <div class="circle-complete"></div>
            <div class="circle"></div>
            <div class="circle-current"></div>

            </div>
             <h3>
                 Set your Preferences
             </h3>
             <div className="details-div">
                        <div className="d-flex flex-row">
                        <div className="form-group pr-5 w-50">
                            <label for="inputUser4">Set your User Name <span style={{color:"red"}}>*</span></label>
                            <input type="email" class="form-control" id="inputUser4" placeholder="eg. Johan Doe"></input>
                        </div>
                        
                        <div className="form-group ">
                            <label for="inputdaily4">Set your daily hours<span span style={{color:"red"}}>*</span></label>
                            <input type="text" class="form-control" id="inputdaily4" value={this.state.dailyhours}></input>
                        </div >
                       
                        <div className="form-group mt-auto pb-1 pl-3">
                            <button className="button-decrease" onClick={()=>{this.state.dailyhours>1?this.setState({ dailyhours:this.state.dailyhours-1}):this.setState({ dailyhours:1})}}><i className="fas fa-minus"></i></button>
                        </div>
                        <div className="form-group mt-auto pb-1 pl-3">
                        <button className="button-increase" onClick={()=>{this.setState({ dailyhours:this.state.dailyhours+1})}}><i className="fas fa-plus "></i></button>
                        </div>
                        </div>
                        <div>
                            <h5 className="py-3">Choose your preferred languages</h5>
                            <div className="row languages-div">
                                <div className="col-4 d-flex flex-column">   
                                    <label>
                                    <input 
                                        className="mr-2" 
                                        type="checkbox"  
                                        onChange={ () => this.handleChange(1) }
                                        selected={ this.state.selectedlanguage.includes(1)}  
                                    />
                                    English
                                    </label>
                                    <label>
                                    <input  
                                        className="mr-2"
                                        type="checkbox"  
                                        onChange={ () => this.handleChange(2) }
                                        selected={ this.state.selectedlanguage.includes(2)}  
                                    />
                                    Hindi
                                    </label>
                                    <label>
                                    <input  
                                        className="mr-2"
                                        type="checkbox"  
                                        onChange={ () => this.handleChange(3) }
                                        selected={ this.state.selectedlanguage.includes(3)}  
                                    />
                                    Marathi
                                    </label>
                                    <label>
                                    <input  
                                        className="mr-2"
                                        type="checkbox"  
                                        onChange={ () => this.handleChange(4) }
                                        selected={ this.state.selectedlanguage.includes(4)}  
                                    />
                                    Kanada
                                    </label>
                                </div> 
                                <div className="col-4 d-flex flex-column" >   
                                    <label>
                                    <input 
                                        className="mr-2" 
                                        type="checkbox"  
                                        onChange={ () => this.handleChange(5) }
                                        selected={this.state.selectedlanguage.includes(5)}  
                                    />
                                    Telugu
                                    </label>
                                    <label>
                                    <input
                                        className="mr-2" 
                                        type="checkbox"  
                                        onChange={ () => this.handleChange(6) }
                                        selected={ this.state.selectedlanguage.includes(6)}  
                                    />
                                    Tamil
                                    </label>
                                    <label>
                                    <input
                                        className="mr-2"
                                        type="checkbox"  
                                        onChange={ () => this.handleChange(7) }
                                        selected={ this.state.selectedlanguage.includes(7)}  
                                    />
                                    Kashmiri
                                    </label>
                                    <label>
                                    <input
                                        className="mr-2"  
                                        type="checkbox"  
                                        onChange={ () => this.handleChange(8) }
                                        selected={ this.state.selectedlanguage.includes(8)}  
                                    />
                                    Malayalam
                                    </label>
                                </div> 
                                <div className="col-4 d-flex flex-column">   
                                    <label>
                                    <input
                                        className="mr-2" 
                                        type="checkbox"  
                                        onChange={ () => this.handleChange(9) }
                                        selected={ this.state.selectedlanguage.includes(9)}  
                                    />
                                    French
                                    </label>
                                    <label>
                                    <input
                                        className="mr-2" 
                                        type="checkbox"  
                                        onChange={ () => this.handleChange(10) }
                                        selected={ this.state.selectedlanguage.includes(10)}  
                                    />
                                    German
                                    </label>
                                    <label>
                                    <input
                                        className="mr-2" 
                                        type="checkbox"  
                                        onChange={ () => this.handleChange(11) }
                                        selected={ this.state.selectedlanguage.includes(11)}  
                                    />
                                    Spanish
                                    </label>
                                    <label>
                                    <input
                                        className="mr-2"  
                                        type="checkbox"  
                                        onChange={ () => this.handleChange(12) }
                                        selected={ this.state.selectedlanguage.includes(12)}  
                                    />
                                    Russian
                                    </label>
                                </div> 
                            </div>
                        </div>
                        <div className="d-flex flex-row py-4">
                            <p>Do you have Pen-tablet/i-paid with stylus/android tablet with stylus?</p>
                            <div className="yes-no-button-div ml-auto d-flex flex-row">
                            <button className="inst-button mr-4" onClick={()=>{this.setState({ digitalinstruments:true})}}>Yes</button>
                            <button className="inst-button" onClick={()=>{this.setState({ digitalinstruments:false})}}>No</button>
                            </div>
                        </div>
             </div>
             
          <div className="d-flex flex-row">
            <button className="prev-button" onClick={()=>{this.props.onPrevious()}}>Previous</button>
            <div className="next-skip-button-div ml-auto ">
            <button className="skip-button" >Skip</button>
            <Link className="next-button" to="/dashboard">Next</Link>
            </div>
        </div>
        </div>
        
        </div>
      );
    }
  }

export default StepDetail;