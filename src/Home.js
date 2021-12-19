import {useEffect } from 'react';
const Home=()=>{
    useEffect(()=>{
        return ()=>{
            console.log('this component is removed from the dom')
        }
    })
    return (
        <h1>Home Component</h1>
    )
}
export default Home