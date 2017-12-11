import React from "react";
// import RaisedButton from 'material-ui/RaisedButton';

import { TextField } from 'material-ui';

function Home(props){
    return (
        <div>
            <h1>Home</h1>
            <TextField floatingLabelText="Floating Label Text" onChange={props.handleMyInput} />
            <button onClick={props.callContainerFunction} label="Send to sever" disabled={props.isLoading   }>Send to sever</button>
        </div>
    )

}

export default Home;