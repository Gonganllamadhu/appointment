import "./Navbar.css"

function Navbar(){
    return(
        <div className="Navbar">
            <div className="left "><a href="/" id="navbara">Home</a></div>
            <div className="right">
                <a href="" id="navbara">About</a>
                <a href="" id="navbara">Profile</a>
            </div>
        </div>
    );
}
export default Navbar;