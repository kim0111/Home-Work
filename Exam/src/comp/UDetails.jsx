import React, {useState} from 'react';
import {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";


const UDetails = () => {
    const [uni, setUni] = useState();
    const params = useParams("name");
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://universities.hipolabs.com/search?name="+ params.name)
        .then(res => res.json())
        .then(data => {
            setUni(data[0]);
            setLoaded(true);
        })
    }, [params.name])

    const goBack = () => {
        navigate("/")
    }

    return(
        <div>
            {
                (loaded && uni) ?
                <div className="flex-column">
                    <div className="flex-row">
                            <div>
                                <img src={"https://logo.clearbit.com/" + uni.domains} alt=""/>
                            </div>
                            <div>
                                <h2>{uni.name}</h2>
                                <p>Country: {uni.country}</p>
                                <p>Web Pages: {uni.web_pages}</p>
                                <p>Alpha_two_code: {uni.alpha_two_code}</p>
                            </div>
                        </div>
                        <button onClick={goBack}>Назад</button>
                    </div>

                    : <h3>...Loading</h3>
            }
        </div>
    )
};

export default UDetails;