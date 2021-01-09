import React from 'react';
import {logs} from "./another";
let blog=(props)=>{
    logs(props);
    return(
        <div >
            <h2>{ props.title}</h2>
            <p>{props.description}</p>
          
          </div>
      )
}
export default blog;