import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>

            <nav>
                <div class="first">
                    <h3>Hello</h3>
                </div>
                <div class="second">
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/display'><li>Display</li></Link>
                        <Link to='/counter'><li>Counter</li></Link>
                        <Link to='/recipes'><li>Recipes</li></Link>
                    </ul>
                </div>
                <div class="third">
                    <Link to='/register'><button>Register</button></Link>
                    <button>Signin</button>
                </div>
            </nav>
            <main>
                {/* <h1>Home page</h1> */}
            </main>
        </>
    )
}

export default Header;