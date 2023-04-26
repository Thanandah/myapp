import { useRef, useState } from 'react';
export default function Bmi(){
    const w_inputRef=useRef(null);
    const h_inputRef=useRef(null);
    const [Bmi,SetBmi]=useState(0);
    const calBmi=()=>{
        let w=w_inputRef.current.value;
        let h=h_inputRef.current.value/100;
        SetBmi(w / Math.pow(h,2));
        }
    return (
        <>
        <h3>BMI Calculator</h3>
        Weight: <input
            type="text"
            ref={w_inputRef}/> kg.<br/>
        Height: <input
            type="text"
            ref={h_inputRef}/> cm.<br/>
            <button onClick={()=>calBmi()}>Calculator!</button>
            {Bmi}
        </>
    );
}