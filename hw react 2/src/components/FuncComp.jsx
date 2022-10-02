import React, {useState} from 'react';

const FuncComp = () => {
    const [text, setText] = useState("hello");
    function textChange(event) {

        setText(event.target.value);
        console.log(text);
        
    }
    function txt(){
        alert(text);
    }
    return (
        <div>

            <form>
                <input type="text" value={text} onChange={textChange}/>
            </form>
                <button onClick={txt}>Submit</button>
        </div>
    );
};


export default FuncComp;