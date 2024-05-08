import { FaCaretDown } from "react-icons/fa";
import { RiDashboard2Line } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Service/Operation/Auth";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdFlight } from "react-icons/md";
import { setModifyData } from "../../Slices/modifySlice";
import { setFlightData } from "../../Slices/flightSlice";
const ProfileDropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { allFlightData } = useSelector((state) => state.flight);

  //   console.log("frsdsa NAv",allFlightData)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logOutFun = () => {
    dispatch(logout(navigate));
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const dashClickHandler = () => {
    dispatch(setModifyData(null));
    localStorage.removeItem("modifyData");
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div className="relative z-50 " ref={dropdownRef}>
      <div className="flex gap-1 items-center cursor-pointer">
        <div
          className="w-[40px] h-[40px] rounded-[50%] bg-white group"
          onClick={toggleDropdown}
        >
          <img
            className="w-full h-full rounded-[50%] "
            alt=".."
            src={user.image}
          ></img>
        </div>
        <div className="text-white" onClick={toggleDropdown}>
          <FaCaretDown />
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute top-[110%] -translate-x-[55%] rounded-lg z-20 
        w-[150px] border-[0.1px] border-richblack-200 text-richblack-200 
        bg-gray-800"
        >
          <Link to={"/dashboard"} className="block">
            <button
              onClick={dashClickHandler}
              className="flex gap-1 items-center px-3 border-b-[0.1px] border-gray-400 py-2"
            >
              <RiDashboard2Line />
              Dashboard
            </button>
          </Link>
          {allFlightData?.length > 0 && (
            <Link to={"/dashboard/user/flight-data"} className="block">
              <div className="flex gap-1 items-center px-3 border-b-[0.1px] border-gray-400 py-2">
                <MdFlight />
                Flight
              </div>
            </Link>
          )}
          <Link to={"/dashboard/user/my-booking"} className="block">
            <div className="flex gap-1 items-center px-3 border-b-[0.1px] border-gray-400 py-2">
              <IoBookmarkOutline />
              My Booking
            </div>
          </Link>
          <div
            onClick={logOutFun}
            className="flex cursor-pointer  gap-1 items-center px-3 py-2"
          >
            <TbLogout />
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
