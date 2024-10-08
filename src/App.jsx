import { useState } from 'react'
import './App.css'

function App() {
  let [ count, setCounter]= useState(0)

  const addValue =  () => {
    //count += 1;
    setCounter(count+1)
     // setCounter(count+1)                           // Here react send all set of instruction in a bundle. So countre value inc only once.
    // setCounter(count+1)
    // setCounter(count+1)
    // setCounter(count+1)
    setCounter(prevCounter  => prevCounter +1 )     //  Here react send all set of instruction in separate way. So countre value inc by 4.
    setCounter(prevCounter  => prevCounter +1 )
    setCounter(prevCounter  => prevCounter +1 )
    setCounter(prevCounter  => prevCounter +1 )
  };
  const disValue  = () => {
    //count -= 1;
    if(count > 0) {
      setCounter(count-1)
    };
    
  }
 
//const count =>  useState(0)
  return (
    <>
      <h1 >My Web site </h1>
      <h1> Count : {count}</h1>
        

        <button onClick={addValue} >Count_Add : {count}</button>
        <br/>
        <br/>
        <button onClick={disValue}> Count_Subtract : {count}</button>
    </>
  )
}

export default App
