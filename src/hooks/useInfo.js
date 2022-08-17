import { useEffect, useState } from "react"

const useInfo = () =>{
    const [info,setInfo] = useState([]);

    useEffect(()=>{
        fetch('https://mysterious-brook-81821.herokuapp.com/information')
        .then(res=>res.json())
        .then(data=>setInfo(data));
    },[])
    return [info];
}

export default useInfo;