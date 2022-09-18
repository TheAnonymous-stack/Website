const Navbar = () => { // create a new component by creating a new file and create a function for the component
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1> 
            <div className="links"> 
               <a href = "/">Home</a>  
               <a href = "/create" style={{ //first curly brace: dynamic value HTML, second curly brace: object in JS.
                color: "white", // set properties for the decoration block of 'New Blog'
                backgroundColor: '#f1356d',
                borderRadius: '8px'

               }}>New Blog</a> 
               
            </div>
        </nav>
      );
}
 
export default Navbar ;