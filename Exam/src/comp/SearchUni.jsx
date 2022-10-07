import React, {useState} from 'react';
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import UItem from './UItem';

const SearchUni = () => {
    const params = useParams("query");
    const [unis, setUnis] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(false);
        fetch("http://universities.hipolabs.com/search?name=" + params.query)
            .then(res => res.json())
            .then(data => {
                setUnis(data);
                setLoaded(true);
            })
    }, [params.query]);
    return (
        <div>
            {
                !loaded ? <h3>Loading...</h3> :
                    <div className="uni-list">
                        {
                            unis.map((uni) =>
                            <UItem key={uni.name} uni={uni}/>)
                        }
                    </div>
            }
        </div>
    );
};

export default SearchUni;