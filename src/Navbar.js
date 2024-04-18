import "./Navbar.css"

function Navbar(){
    return(
        <div className="Navbar">
            <div className="left "><a href="/">Home</a></div>
            <div className="right">
                <a href="">About</a>
                <a href="">Profile</a>
            </div>
        </div>
    );
}
export default Navbar;