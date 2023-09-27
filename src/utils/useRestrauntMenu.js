
import { useEffect, useState } from "react";
import { SWIGGY_REST_MENU } from "./Constants";

const useRestrauntMenu =(resId) => {

    const[resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async ()=>{
        const response = await fetch(SWIGGY_REST_MENU + resId);
        const json = await response.json();
        console.log('custom Hook Json Data',json);
        setResInfo(json.data);
    }
    console.warn('custom Hook Reponse',resInfo)
    return resInfo;
}

export default useRestrauntMenu;