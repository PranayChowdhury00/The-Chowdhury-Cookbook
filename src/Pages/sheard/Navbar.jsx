import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Navbar = () => {
    const {user,signOutUser}=useContext(AuthContext);
    const links = <>
    <li className="font-medium text-[17px]"><a href='/'>Home</a></li>
    <li className="font-medium text-[17px]"><a href='#recipes'>Recipes</a></li>
    <li className="font-medium text-[17px]"><a href='#blog'>Blog</a></li>
    <li className="font-medium text-[17px]"><a href='#contact'>Contact</a></li>
    <li className="font-medium text-[17px]"><a href='#aboutUs'>About Us</a></li>
    
    </>
    const handelLogout = ()=>{
        signOutUser()
        .then((res) => {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Log out Successful!",
                  showConfirmButton: false,
                  timer: 1500,
                });
                        
              })
              .catch((error) => {
                Swal.fire({
                  icon: "error",
                  title: "Log Out!",
                  text: error.message,
                  confirmButtonColor: "#f43f5e",
                });
              });
    }

    return (
        <div className="navbar bg-base-100 shadow-sm h-[100px] px-12">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost lg:text-xl ">𝕿𝖍𝖊 𝕮𝖍𝖔𝖜𝖉𝖍𝖚𝖗𝖞 𝕮𝖔𝖔𝖐𝖇𝖔𝖔𝖐</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    
 {
    user? <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS Navbar component"
          src={user?.photoURL} />
      </div>
    </div>
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li className="text-[18px] font-bold"><Link>DashBoard</Link></li>
      <li className="text-[18px] font-bold"><button onClick={handelLogout}>Logout</button></li>
    </ul>
  </div>:
  <Link className="text-[18px] font-bold" to='/login'>Login</Link>
 }


  </div>

</div>
    );
};

export default Navbar;