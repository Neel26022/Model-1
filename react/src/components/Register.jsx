import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import './Register.css';

const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <Header />
            <div className="container">
                <form action="">
                    <h1 className="item">Register</h1>
                    
                    <div className="item">
                        <label htmlFor="username">Username:</label>
                        <input type="text" 
                        placeholder="Enter Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username} /><br />

                        <p className={username? "" : "error"}>{username ? "":"User name reuqired"}</p>
                    </div>

                    <div className="item">
                        <label htmlFor="password">Password:</label>
                        <input type="password" placeholder="Enter Password" /><br />
                        <p className={password? "" : "error"}>{password ? "" : "Password is required"}</p>
                    </div>

                    <div className="item">
                        <label htmlFor="gender">Gender:</label> 
                        Male <input type="radio" value="male" name="gender" /> 
                        Female <input type="radio" value="female" name="gender" /> 
                        Other <input type="radio" value="other" name="gender" /><br />
                    </div>

                    <div className="item">
                        <label htmlFor="birth-date">Birth-Date:</label>
                        <input type="date" /> <br />
                    </div>

                    <div className="item">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" placeholder="Enter Phone Number" /><br />
                    </div>

                    <div className="item">
                        <label htmlFor="choice">Choice:</label>
                        <input type="checkbox" value="bmw" /> BMW
                        <input type="checkbox" value="ferrari" /> Ferrari
                        <input type="checkbox" value="tata" /> Tata
                    </div>

                    <div className="item">
                        <label htmlFor="address">Address:</label>
                        <textarea name="Address" id="address" placeholder="Enter Your address"></textarea>
                    </div>

                    <div className="item">
                        <label htmlFor="color">Color:</label>
                        <input type="color" />
                    </div>

                    <div className="item">
                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder="Enter Your Email" />
                    </div>

                    <div className="item">
                        <label htmlFor="range">Range:</label>
                        <input type="range" min="0" max="100" defaultValue="50" />
                    </div>

                    <div className="item">
                        <label htmlFor="file">Upload File:</label>
                        <input type="file" />
                    </div>

                    <div className="item">
                        <label htmlFor="search">Search:</label>
                        <input type="search" placeholder="Search anything 😀" />
                    </div>

                    <div className="item">
                        <label htmlFor="dropdown">Select Stream:</label>
                        <select name="stream" id="dropdown">
                            <option value="IT">IT</option>
                            <option value="AIML">AIML</option>
                            <option value="CE">CE</option>
                        </select>
                    </div>

                    <div className="item">
                        {/* Fixed the inline style attribute to use a JavaScript object */}
                        <div style={{ width: '100px', height: '50px', display: 'flex', alignItems: 'center' }}>
                            <label htmlFor="image">Image:</label>
                            <input type="image" alt="Hello" style={{ height: '100%', width: '100%' }} src="https://static.vecteezy.com/system/resources/previews/025/894/618/non_2x/cute-word-hello-cartoon-style-illustration-vector.jpg" />
                        </div>
                    </div>

                    <input type="submit" id="submit" />
                    <input type="reset" id="reset" /> {/* Changed duplicate ID 'submit' to 'reset' */}
                </form>
            </div>
        </>
    );
};

export default Register;
