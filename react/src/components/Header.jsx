import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>

            <nav>
                <div className="first">
                    <h3>Neel Prajapati</h3>
                </div>
                <div className="second">
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/display'><li>Display</li></Link>
                        <Link to='/counter'><li>Counter</li></Link>
                        <Link to='/recipes'><li>Api Call</li></Link>
                        <Link to='/website'><li>Static Website</li></Link>
                        <Link to='/fetch-users'><li>Fetch Users</li></Link>
                    </ul>
                </div>
                <div className="third">
                    <Link to='/register'><button>Register</button></Link>
                    
                </div>
            </nav>
            <main>
                {/* <h1>Home page</h1> */}
            </main>
        </>
    )
}

export default Header;