import React from 'react';

class StudentRecord extends React.Component {
    render() { 
    return ( 
    <div> 
       <p>{this.props.value.name}</p>
       <p>{this.props.value.father}</p>
       <p>{this.props.value.email}</p> 
        </div>
    )
    }
}

export default StudentRecord;