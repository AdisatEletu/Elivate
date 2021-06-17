import React, {useRef, useState} from "react";
import './otp.css'

export const OtpInput = ({ length, label, loading, onComplete }) =>{
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef([]);
  
  const controlInput = (e, slot) =>{
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    }
    if (newCode.every(num => num !== "")) {
      onComplete(newCode.join(""));
    }
  };
  
  
  const handleKeyUp = (e, slot) =>{
    if(e.keyCode === 8 && !code[slot] && slot !== 0){
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };
  
  console.log({code});
  
  return(
    <>
      {code.map((num, i)=>{
        return <input className={'otp-input'} value={num} autoFocus={!code[0].length && i === 0} readOnly={loading}
                      onChange={e => controlInput(e, i)}
                      key={i}
                      onKeyUp={e => handleKeyUp(e, i)}
                      ref={ref => inputs.current.push(ref)}
                      maxLength={1}/>
      })}
    </>
  )
};