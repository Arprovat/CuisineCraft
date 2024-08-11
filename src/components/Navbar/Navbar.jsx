import Nav from "../Nav/Nav";
import profile from '../../assets/image/profile.png';
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    return (
    
        <div className="flex items-center sticky top-0 mx-auto w-full justify-between p-4 ">
           <section>
            <h1 className="text-2xl ml-5 font-bold font-mono">CuisineCraft</h1>
           </section>
          <section>
            <Nav></Nav>
          </section>
          <section className="mr-5 flex justify-between items-center gap-4 ">
           <div className="relative items-center">
           <input className="w-full pl-10 pr-4 py-2 rounded-full border bg-slate-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder='Search...' />
            <IoSearchOutline className="absolute   text-center left-3 top-3 text-gray-500"/>
           </div>
            <img className="" src={profile} alt="profile" />
          </section>
          
        </div>
        
    );
};

export default Navbar;