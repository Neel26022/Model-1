import { useState } from "react"
import Header from "./Header";
import Footer from "./Footer";
import './Display.css'

const Display = () => {
    const [name, setName] = useState('')
    
    return (
        <>
            <Header />
            <div className="display">
                <h1>Display Page:</h1><br />
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <h1>Welcome, {name}</h1>
            </div>
            <Footer />
        </>
    )
}

export default Display;