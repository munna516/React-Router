import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between items-center font-bold mt-5">
            <NavLink to='/' style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "gray" : "",
                    padding: isActive ? "5px 10px" : " ",
                    borderRadius: isActive ? "10px" : "",
                    color: isActive ? "white" : ""
                };
            }}>Home</NavLink>
            <NavLink to='/about'  style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "gray" : "",
                    padding: isActive ? "5px 10px" : " ",
                    borderRadius: isActive ? "10px" : "",
                    color: isActive ? "white" : ""
                };
            }}>About</NavLink>
            <NavLink to='/meals'  style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "gray" : "",
                    padding: isActive ? "5px 10px" : " ",
                    borderRadius: isActive ? "10px" : "",
                    color: isActive ? "white" : ""
                };
            }}>Meals</NavLink>
            <NavLink to='/albums'  style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "gray" : "",
                    padding: isActive ? "5px 10px" : " ",
                    borderRadius: isActive ? "10px" : "",
                    color: isActive ? "white" : ""
                };
            }}>Albums</NavLink>
            <NavLink to='/contact'  style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "gray" : "",
                    padding: isActive ? "5px 10px" : " ",
                    borderRadius: isActive ? "10px" : "",
                    color: isActive ? "white" : ""

                };
            }}>Contact</NavLink>
        </div>
    );
};

export default Header;