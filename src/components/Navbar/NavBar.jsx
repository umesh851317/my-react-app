import { Link } from "react-router-dom";

function Navbar() {
       return (
              <nav className="bg-black text-amber-50 flex text-center justify-center gap-5 h-10 text-2xl">
                     <Link to="/">Home</Link>
                     <Link to="/react">React basic</Link>
                     <Link to="/reactHook">React Hooks</Link>
              </nav>
       );
}

export default Navbar