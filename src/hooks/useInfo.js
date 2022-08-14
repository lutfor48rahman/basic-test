import { useEffect, useState } from "react"

const useInfo = () =>{
    const [info,setInfo] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/information')
        .then(res=>res.json())
        .then(data=>setInfo(data));
    },[])
    return [info];
}

export default useInfo;