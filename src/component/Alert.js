import React from 'react'

export default function Alert(props) {

  // this function make first letter of alert capital letter 
  const capatalized = (word) =>{
    const temp = word.toLowerCase();
    word = temp[0].toUpperCase() + temp.slice(1);
    return word;
  }
  return (
    <div style ={ {height : '50px'}} >
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capatalized(props.alert.type)}</strong> : {props.alert.msg}
    </div>}
    </div>
  )   
}
// && oprator in javascript used to check if first condition is false then it eliminate else go to fumction eg :  
// if props.alert is not null then it execute all code after that else it eliminate