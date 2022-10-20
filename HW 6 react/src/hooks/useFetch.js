import {useState} from "react";

export const useFetch = (callback) => {
    const [isLoaded, setIsLoaded] = useState(null);
    const [error, setError] = useState("");
    const fetching = async () => {
        try {
            setIsLoaded(true);
            await callback();
        } catch (e) {
            setError(e.message);
        }
    }
    return [fetching, isLoaded, error];
}