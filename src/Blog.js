import React from 'react';
import {logs} from "./another";
import classes from './Blog.module.css';
let blog=(props)=>{
    logs(props);
    return(
        <div className={classes.style} >
            <h2>{ props.title}</h2>
            <p>{props.description}</p>
          
          </div>
      )
}
export default blog;