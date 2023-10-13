import { useEffect } from "react";




const UseTitle = title =>{
    useEffect(()=>{
        document.title = `adventure - ${title}`
    },[title])
}

export default UseTitle;