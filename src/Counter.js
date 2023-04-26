import React, {useState} from "react";

const Counter=()=>{
    const [count,setCount]=useState(0);
    const [show,setShow]=useState(true);
    return (<>
                <button onClick={()=>setCount(count+1)}>
                    Click me
                </button>
                <p>You cilcked {count} times</p>
                <button onClick={()=>setShow(!show)}>
                    show/hide
                </button>
                {(show)?"Hello world": " "}
    </>);
}
export default Counter;