//type "sfc" creates fuctional component boilerplate
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Funmi_Stopshop</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/join">Signup</a>
      </div>
    </nav>
  );
}
 
export default Navbar;