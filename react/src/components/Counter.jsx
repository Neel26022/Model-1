import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Counter = () => {
    
  const [count, setCount] = useState(0)

    return (
        <>
        <Header />
        <h1>Cout: {count}</h1>
         <button onClick={() => setCount(count +1)}>Increment</button><br />
         <button onClick={() => {
           if(count >0) {
             setCount(count -1)
           }
         }}>Decrement</button><br />
         <button onClick={() => setCount(0)}>Reset</button><br />
         <br /><br />
         <Footer />
        </>
    )
}

export default Counter;