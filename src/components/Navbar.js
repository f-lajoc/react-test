import Home from "./Home";
//type "sfc" creates fuctional component boilerplate
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Funmi_Stopshop</h1>
      <div className="links">
        <a href="/login">Login</a>
        <a href="/"><Home></Home></a>
        <a href="/register">Signup</a>
      </div>
    </nav>
  );
}
 
export default Navbar;