import React from 'react';

function CustomP(props) {
    //return <p> I am inside the customP tag! </p>;
    let color = '';
    if (props.text.lenth < 10) {
        color = 'red';
    }
    else {
        color = 'green';
    }
    return <p style={{ color: color }}>{props.text} </p>;
}

export default CustomP;
