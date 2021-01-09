import React from 'react';

let blog=(props)=>{
    return(
        <div >
            <h2>{ props.title}</h2>
            <p>{props.description}</p>
          
          </div>
      )
}
export default blog;