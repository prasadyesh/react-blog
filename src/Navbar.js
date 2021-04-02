const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The gojo blog</h1>
            <div className="links">
                <a href className="/">Home</a>
                <a href="/create" style = {
                    {
                        color : "white",
                        backgroundColor : "#f1356d",
                        borderRadius : '8px'
                    }
                }>New Blog</a>
                <create></create>
            </div>
        </nav>
        
        );
}

export default Navbar;