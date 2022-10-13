import React, { useState } from 'react';
import {useMemo} from "react";

const Inp = () => {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [sum, setSum] = useState();
    const [sended, setSended] = useState();
    const [isEven, setIsEven] = useState();

    const test = () => { 
        setSended(Number(num1) + Number(num2) *100);
        if((Number(num1) + Number(num2))%2==0){
            setIsEven("Четное")
        } else{
            setIsEven("Нечетное")
        }
    }

    const even = useMemo(() => {
        console.log("even");
    }, [isEven]);

    const summary = useMemo(() => {
        console.log("sum");
        setSum(Number(num1) + Number(num2))
    }, [sended]);

    return (
        <div>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}/>
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}/>
            <button onClick={test}>Send</button>
            <h3>Sum: {sum}</h3>
            <h3>{isEven}</h3>
        </div>
    );
};

export default Inp;