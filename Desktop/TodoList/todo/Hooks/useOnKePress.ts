import { useEffect, useRef } from "react";

type cbFunction = () => void;

export const useOnKeyPress = (cb: cbFunction, targetKey:string) => {
   const callbackRef = useRef(cb);
   useEffect(()=>{
    callbackRef.current = cb;
   })
   
    useEffect(()=>{
        const keyPressHandler = (event:any)=>{
       if(event.key === targetKey) {
        callbackRef.current()
       }
      }
        window.addEventListener('keydown', keyPressHandler)
        return ()=>{
        window.removeEventListener('keydown', keyPressHandler)
        }
    },[targetKey])
}
