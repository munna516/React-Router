import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between items-center font-bold mt-5">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/meals'>Meals</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
};

export default Header;