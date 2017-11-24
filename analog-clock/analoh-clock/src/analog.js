import React from 'react';


const DigitalDisplay = function(props) {
    const locale = time => (new Date(time)).toLocaleString('locale');
    return <div>{locale(props.time)}</div>
    }

 export default  DigitalDisplay;