import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPoems } from "../store/slices/poems";

const usePoems = () => {
    const [poemss, setPoemss] = useState<IPoem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch();


    
    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('https://poetrydb.org/poemcount/20');
        const data = await response.json();
        dispatch(setPoems(data));

        setLoading(false);
        };
    
        fetchData();
    }, []);
    
    return { poemss, loading };
}

export default usePoems;