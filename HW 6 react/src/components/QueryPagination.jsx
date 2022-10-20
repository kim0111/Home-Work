import React from 'react';
import {useMemo} from "react";
import {createSearchParams, useNavigate} from "react-router-dom"

const QueryPagination = ({totalPages}) => {
    const navigate = useNavigate();

    const pagesArray = useMemo(() => {
        console.log("цикл");
        let pagesArr = [];
        for (let i = 0; i < totalPages; i ++) {
            pagesArr.push(i+1);
        }
        return pagesArr;
    }, [totalPages]);

    const goToPage = (page) => {
        const params = {page: page};
        navigate({
            pathname: "/posts",
            search: `?${createSearchParams(params)}`
        })
    }

    return (
        <div>
            {
                pagesArray.map((p) =>
                    <button
                        key={p}
                        onClick={() => goToPage(p)}
                    >{p}</button>
                )
            }
        </div>
    );
};

export default QueryPagination;