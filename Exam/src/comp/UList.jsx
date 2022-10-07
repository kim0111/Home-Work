import React from "react";
import {useState, useEffect} from "react";
import UDetails from "./UDetails";
import UItem from "./UItem";


const UList=()=>{
    const [unis,setUnis] = useState([]);
    // unis.slice(100);
    //useMemo (-_-)
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        fetch("http://universities.hipolabs.com/search")
            .then(res => res.json())
            .then(data =>{
                setUnis(data);
                setLoaded(true);
                // console.log(data);
            })
    },[]);

return(
    <div>
        {
            !loaded ? <h3>Loading</h3> :
            <div>
                <h1>List Unis</h1>
                <div className="uni-list">
                        {
                            unis.slice(9600).map((uni) =>
                            // <div >{uni.name}</div>
                            <UItem key={uni.name} uni={uni}/>
                            )
                        }
                </div>
            </div>
        }
    </div>

);
};

export default UList;