import { Link } from "react-router-dom";

function Navbar() {
       return (
              <nav className="bg-black p-5 text-amber-50 flex text-center items-center justify-between gap-5 h-15 text-2xl">
                     <div>React </div>
                     <div className="flex text-center items-center justify-center gap-4">
                            <Link className="border rounded-xl p-1" to="/">Home</Link>
                            <Link className="border rounded-xl p-1" to="/react">React basic</Link>
                            <Link className="border rounded-xl p-1" to="/reactHook">React Hooks</Link>
                     </div>
                     <div>
                            User
                     </div>
              </nav>
       );
}

export default Navbar