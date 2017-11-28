import React from 'react';
import StudentRecord from './studentRecord';

class Events extends React.Component {
    constructor(){
        super();
        this.state = {
            name : "",
            father :"",
            email:"",
            show : false
        }
    }
    
     function1(event){
         this.setState({name: event.target.value});
     
 }
     function2(event){
     this.setState({father: event.target.value});
 }
     function3(event){
                this.setState({email: event.target.value});
 }               

    suBmit(event){
        this.setState({show: true})
        event.preventDefault();
    }
        
        render (){
            let showcommponent = ""
            if(this.state.show === true)
    showcommponent = <StudentRecord value= {this.state}/>

            return (
             <div>
           <form onSubmit={this.suBmit.bind(this)}>
           First name:<br/>
           <input type="text"  value={this.state.name}  onChange={this.function1.bind(this)} />
           <br/>
           father name:<br/>
           <input type="text" value={this.state.father} onChange={this.function2.bind(this)}  />
          <br />
           Email <br />
           <input type="email" value={this.state.email} onChange={this.function3.bind(this)} />
           <br />
           <input type="submit" value="Submit" />
         </form> 
       <h1>    {showcommponent} </h1>
            </div>
           
    )

        }
    
}

export default Events;