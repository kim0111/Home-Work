import {useEffect, useRef} from "react";

export const useObserver = (ref, callback) => {
    const observer = useRef();
    useEffect(() => {
        const callback_f = function (entries, observer) {
            if (entries[0].isIntersecting) {
                callback();
            }
        }
    })
}