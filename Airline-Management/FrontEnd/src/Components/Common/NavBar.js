import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaCircleChevronDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Service/Operation/Auth";
import { useDispatch } from "react-redux";
import ProfileDropDown from "./ProfileDropDown";
const NavBar = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { user, loading } = useSelector((state) => state.profile);
  // console.log("This is Loading value in nav ", user);

  const matchRoute = (path) => {
    return path === location.pathname;
  };

  const NavbarLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <div className="w-screen fixed z-50 h-[50px] flex justify-center items-center bg-[rgba(0,12,35)] border-b border-b-richblack-700">
      <div className="w-10/12 h-full  flex items-center mx-auto">
        <div className="w-1/3  flex items-center ">
          <Link to={"/"}>
            <img
              className="h-full "
              alt="load..."
              width={50}
              src="https://res.cloudinary.com/dkoezhi9u/image/upload/v1708422225/samples/Logo_llkrfe.png"
            ></img>
          </Link>
        </div>
        <div className="w-1/3 font-semibold flex items-center  justify-between text-white ">
          {NavbarLinks?.map((val, index) => {
            return (
              <div key={index} className="hover:text-yellow-100">
                {val.title === "Catalog" ? (
                  <div className="cursor-pointer relative flex transition-all ease-in-out duration-800  items-center gap-2 group">
                    {val.title}
                    <span className="text-richblack-200">
                      <FaCircleChevronDown></FaCircleChevronDown>
                    </span>
                    <div
                      className="invisible absolute transition-all ease-in-out duration-200  group-hover:visible bg-white rounded-md w-[30px] 
                  h-[30px] z-10 top-[100%] translate-y-2 left-[75%] rotate-45"
                    ></div>
                    <div
                      className="invisible absolute transition-all ease-in-out duration-200 group-hover:visible z-10 top-[100%] translate-y-4 -translate-x-[35%]
                   bg-white w-[300px]  rounded-lg flex flex-col  py-5 px-5 "
                    >
                      {"fn"}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${
                      matchRoute(val.path)
                        ? "text-yellow-50"
                        : "text-richblack-100 hover:text-yellow-100"
                    } `}
                  >
                    <Link to={`${val.path}`}>{val.title}</Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Login, SignUp and Dashboard */}

        <div className="w-1/3 relative  text-white flex justify-end gap-5 items-end">
          {token === null && (
            <Link to="/login">
              <div
                className={`py-2 px-3 bg-richblack-700 rounded-lg border border-richblack-200 transition-all duration-200 
         hover:border hover:border-caribbeangreen-300
         ${
           matchRoute("/login")
             ? " text-caribbeangreen-200 border border-caribbeangreen-300"
             : "bg-richblack-700"
         }
        `}
              >
                Login{" "}
              </div>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <div
                className={`py-2 px-3 bg-richblack-700 rounded-lg border border-richblack-200 transition-all duration-200 
         hover:border hover:border-caribbeangreen-300
         ${
           matchRoute("/signup")
             ? " text-caribbeangreen-200 border border-caribbeangreen-300"
             : "bg-richblack-700"
         }
        `}
              >
                Sign Up{" "}
              </div>
            </Link>
          )}


          {/* {token && (
            <div className="border border-green-300">
              <ProfileDropDown></ProfileDropDown>
            </div>
          )} */}
        </div>
        
      </div>
      {token && (
            <div className="pr-5 text-white">
              <ProfileDropDown></ProfileDropDown>
            </div>
          )}
    </div>
  );
};
export default NavBar;
