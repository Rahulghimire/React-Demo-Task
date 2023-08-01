import React,{useState,useEffect, CSSProperties} from 'react'
import { ClimbingBoxLoader } from 'react-spinners';

export const LoadingScreen = () => {
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
       },7000);
    },[])

  return (
   <div className='loader'>
   {loading?
   <ClimbingBoxLoader
   color={"#d4618a"}
   loading={loading}
   size={50}
   aria-label="Loading Spinner"
   data-testid="loader"
 />
   :""}
   </div>
  )
}
