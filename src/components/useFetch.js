import { useEffect, useState } from 'react';

export const useFetch=(url)=>{
    const [state,setState]=useState({data:null,loading:true})
    console.log('url='+url)
    useEffect(()=>{
        console.log('url use effect='+url)
        fetch(url)
            .then(resp=>resp.text())
            .then(text=>{
                console.log('text='+text)
                setState({data:text,loading:false})
            })
    },[url]);

    return state;
}