import React from 'react';
import {useMemo} from "react";

const Pagination = ({totalPages, setPage, page}) => {

    const pagesArray = useMemo(() => {
        console.log("цикл");
        let pagesArr = [];
        for (let i = 0; i < totalPages; i ++) {
            pagesArr.push(i+1); // [1,2,3....10]
        }
        return pagesArr;
    }, [totalPages]);

    return (
        <div>
            {
                pagesArray.map((p) =>
                    <button
                        className={p === page && "current-page"}
                        key={p}
                        onClick={() => setPage(p)}
                    >{p}</button>
                )
            }
        </div>
    );
};

export default Pagination;