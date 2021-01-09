const arrCheck=(arr)=>{
      if(arr !==undefined && arr!==null && arr.Length>0){
        return true;
    }
    return false;
}

const logs=(message)=>{
    console.log(message);
}

export {arrCheck,logs};