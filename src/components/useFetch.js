import { useEffect, useState } from 'react';

export const useFetch=(url)=>{
    const [state,setState]=useState({data:null,loading:true})
    useEffect(()=>{
        fetch(url)
            .then(resp=>resp.text())
            .then(text=>{
                setState({data:text,loading:false})
            })
    },[url]);

    return state;
}