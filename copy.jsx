import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import HeadEnvelope from "../icon/HeadEnvelope";
import SmallText from "../components/SmallText";
import Text from "../components/Text";
import HeadCall from "../icon/HeadCall";
import { FiLogIn } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { logOut } from "../features/authentication/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector((state) => state.auth);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileProfileOpen, setIsMobileProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const profileRef = useRef(null);
  const mobileProfileRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false); // Call the function passed via props
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsProfileOpen]);
  const handleProfileOpen = () => {
    setIsProfileOpen((prev) => !prev);
  };
  const handleMobileProfileOpen = () => {
    setIsMobileProfileOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 100); // Adjust the scroll value as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define main menu items and sub-menu items
  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Fertility",
      path: "/fertility",
    },
    {
      name: "Dental",
      path: "/dental",
    },
    {
      name: "Mental Health",
      path: "/mental-health",
    },
    {
      name: "Plastic Surgery",
      path: "/plastic-surgery",
    },
    {
      name: "Weight Loss",
      path: "/weight-loss",
    },
  ];

  return (
    <header className="">
      <nav className="py-2 shadow-md">
        <div className="hidden tab:block">
          <div className="w-full">
            <div className="flex justify-between px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto">
              <img src={Logo} alt="logo" className="h-14" />
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full border border-headerColor">
                    <HeadEnvelope />
                  </div>
                  <div>
                    <SmallText
                      padding={`py-0`}
                      font={`font-semibold`}
                      color={`textColor1`}
                    >
                      info@fintech.com
                    </SmallText>
                    <h6 className="text-xs text-textColor3">Email Now !</h6>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full border border-headerColor">
                    <HeadCall />
                  </div>
                  <div>
                    <SmallText
                      padding={`py-0`}
                      font={`font-semibold`}
                      color={`textColor1`}
                    >
                      +880 1XXX XXXXXX
                    </SmallText>
                    <h6 className="text-xs text-textColor3">Call Now !</h6>
                  </div>
                </div>
                {!user.isLoggedIn && (
                  <button
                    onClick={() => nav("auth/login")}
                    className="flex items-center gap-2 uppercase px-6 py-2 bg-headerColor rounded-md hover:bg-accent"
                  >
                    <Text font={`font-semibold `} color={`white`}>
                      login
                    </Text>
                    <FiLogIn className="text-white text-xl" />
                  </button>
                )}
                {user.isLoggedIn && (
                  <div className="relative">
                    <div
                      onClick={handleProfileOpen}
                      ref={profileRef}
                      className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md p-1 hover hover:bg-secondary/20"
                    >
                      <img
                        src={user.profileImage}
                        alt="profile image"
                        className="w-10 h-10 rounded-full object-center"
                      />
                      <Text>{user.userName}</Text>
                      {isProfileOpen && (
                        <div className="p-2 absolute top-12 right-0 bg-gray-50 border border-primary rounded-md w-max z-[100]">
                          <div
                            onClick={() => nav(`/user/dashboard`)}
                            className="flex gap-2 items-center p-1 hover:bg-secondary/10 transition-all duration-200 rounded-md cursor-pointer  "
                          >
                            <LuLayoutDashboard className="text-primary text-xl" />
                            <Text
                              color={`primary`}
                              padding={`py-0`}
                              font={`font-semibold`}
                            >
                              Dashboard
                            </Text>
                          </div>
                          <div
                            onClick={() =>
                              user.userType === "client"
                                ? nav(`/user/profile`)
                                : nav(`/investment/profile`)
                            }
                            className="flex gap-2 items-center p-1 hover:bg-secondary/10 transition-all duration-200 rounded-md cursor-pointer  my-2"
                          >
                            <CgProfile className="text-primary text-xl" />
                            <Text
                              color={`primary`}
                              padding={`py-0`}
                              font={`font-semibold`}
                            >
                              Profile
                            </Text>
                          </div>
                          <div
                            onClick={() => dispatch(logOut())}
                            className="flex gap-2 items-center p-1 hover:bg-secondary/10 transition-all duration-200 rounded-md cursor-pointer "
                          >
                            <BiLogOut className="text-primary text-xl" />
                            <Text
                              color={`primary`}
                              padding={`py-0`}
                              font={`font-semibold`}
                            >
                              Log Out
                            </Text>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            className={`w-full py-2 bg-white  border-t border-t-gray-300  ${
              stickyMenu
                ? "fixed shadow-md top-0 h-[65px]"
                : "-top-[65px] tab:-top-[70px] mt-2"
            } left-0 z-50 transition-top duration-500 ease-in-out`}
          >
            <div
              className={`flex ${
                stickyMenu ? "justify-between" : "justify-end"
              } items-center px-4 tab:px-0 tab:w-11/12 laptop:w-5/6 m-auto`}
            >
              {/* Desktop Menu */}
              {stickyMenu && !user.isLoggedIn && (
                <button
                  onClick={() => nav("auth/login")}
                  className="flex items-center gap-2 uppercase px-6 py-2 bg-headerColor rounded-md hover:bg-accent"
                >
                  <Text font={`font-semibold `} color={`white`}>
                    login
                  </Text>
                  <FiLogIn className="text-white text-xl" />
                </button>
              )}
              {stickyMenu && user.isLoggedIn && (
                <div className="relative">
                  <div
                    onClick={handleProfileOpen}
                    ref={profileRef}
                    className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md p-1 hover hover:bg-secondary/20"
                  >
                    <img
                      src={user.profileImage}
                      alt="profile image"
                      className="w-10 h-10 rounded-full object-center"
                    />
                    <Text>{user.userName}</Text>
                    {isProfileOpen && (
                      <div className="p-2 absolute top-12 right-0 bg-gray-50 border border-primary rounded-md w-max z-[100]">
                        <div
                          onClick={() => nav(`/user/dashboard`)}
                          className="flex gap-2 items-center p-1 hover:bg-secondary/10 transition-all duration-200 rounded-md cursor-pointer  "
                        >
                          <LuLayoutDashboard className="text-primary text-xl" />
                          <Text
                            color={`primary`}
                            padding={`py-0`}
                            font={`font-semibold`}
                          >
                            Dashboard
                          </Text>
                        </div>
                        <div
                          onClick={() =>
                            user.userType === "client"
                              ? nav(`/user/profile`)
                              : nav(`/investment/profile`)
                          }
                          className="flex gap-2 items-center p-1 hover:bg-secondary/10 transition-all duration-200 rounded-md cursor-pointer  my-2"
                        >
                          <CgProfile className="text-primary text-xl" />
                          <Text
                            color={`primary`}
                            padding={`py-0`}
                            font={`font-semibold`}
                          >
                            Profile
                          </Text>
                        </div>
                        <div
                          onClick={() => dispatch(logOut())}
                          className="flex gap-2 items-center p-1 hover:bg-secondary/10 transition-all duration-200 rounded-md cursor-pointer "
                        >
                          <BiLogOut className="text-primary text-xl" />
                          <Text
                            color={`primary`}
                            padding={`py-0`}
                            font={`font-semibold`}
                          >
                            Log Out
                          </Text>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div className="hidden md:flex space-x-6">
                {menuItems.map((menu, index) => (
                  <div key={index} className="relative group z-50">
                    <button
                      className="hover:bg-secondary/30 rounded-md px-3 py-2"
                      onClick={() => nav(menu.path)}
                    >
                      <SmallText
                        color={`primary uppercase`}
                        font={`font-semibold tracking-wider`}
                        padding={"py-0"}
                      >
                        {menu.name}
                      </SmallText>
                    </button>
                  </div>
                ))}
              </div>

              {/* Mobile Menu Button */}
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`tab:hidden flex items-center justify-between px-2 shadow-md py-2 ${
            stickyMenu
              ? "fixed shadow-md top-0 w-full bg-white z-50"
              : "-top-[65px] mt-2"
          } transition-top duration-500 ease-in-out`}
        >
          <div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <img src={Logo} alt="logo" className="h-[50px]" />
          {!user.isLoggedIn && (
            <button
              onClick={() => nav("auth/login")}
              className="flex items-center gap-2 uppercase px-6 py-2 bg-headerColor rounded-md"
            >
              <Text font={`font-semibold `} color={`white`}>
                login
              </Text>
              <FiLogIn className="text-white text-xl" />
            </button>
          )}

          {user.isLoggedIn && (
            <div className="relative">
              <div
                onClick={handleMobileProfileOpen}
                ref={mobileProfileRef}
                className="flex items-center gap-2 cursor-pointer  rounded-md p-1 hover hover:bg-secondary/20"
              >
                <img
                  src={user.profileImage}
                  alt="profile image"
                  className="w-10 h-10 rounded-full object-center"
                />
                <Text color={`white`} font={`font-semibold hidden sm:block`}>
                  {user.userName}
                </Text>
                {isMobileProfileOpen && (
                  <div className="p-2 absolute z-10 top-12 right-0 bg-white border border-primary rounded-md w-max">
                    <div
                      onClick={() => nav(`/user/dashboard`)}
                      className="flex gap-2 items-center p-1 hover:bg-secondary transition-all duration-200 rounded-md cursor-pointer  "
                    >
                      <LuLayoutDashboard className="text-primary text-xl" />
                      <Text
                        color={`primary`}
                        padding={`py-0`}
                        font={`font-semibold`}
                      >
                        Dashboard
                      </Text>
                    </div>
                    <div
                      onClick={() => nav(`/user/profile`)}
                      className="flex gap-2 items-center p-1 hover:bg-secondary/10 transition-all duration-200 rounded-md cursor-pointer  my-2"
                    >
                      <CgProfile className="text-primary text-xl" />
                      <Text
                        color={`primary`}
                        padding={`py-0`}
                        font={`font-semibold`}
                      >
                        Profile
                      </Text>
                    </div>
                    <div
                      onClick={() => dispatch(logOut())}
                      className="flex gap-2 items-center p-1 hover:bg-secondary/10 transition-all duration-200 rounded-md cursor-pointer "
                    >
                      <BiLogOut className="text-primary text-xl" />
                      <Text
                        color={`primary`}
                        padding={`py-0`}
                        font={`font-semibold`}
                      >
                        Log Out
                      </Text>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {isMobileMenuOpen && (
          <div
            className={`tab:hidden pt-2 sm:pt-4 pl-2 pr-6 space-y-2 border-b-2 border-primary fixed z-50 ${
              stickyMenu ? "top-[60px]" : "top-[80px]"
            } w-1/2 h-screen bg-white`}
          >
            {menuItems.map((menu, index) => (
              <div key={index} className="space-y-1">
                {/* Toggle only sub-menu open/close on mobile */}
                <button
                  className="w-full text-left px-4 py-2 bg-gray-100 rounded-md text-sm font-medium"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    nav(menu.path);
                  }}
                >
                  {menu.name}
                </button>

                {/* Conditionally render sub-menus on mobile */}
                {activeSubMenu === index && menu.subItems.length > 0 && (
                  <div className="pl-4 space-y-1">
                    {menu.subItems.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 rounded-md"
                        onClick={() => {
                          nav(subItem.path);
                          setIsMobileMenuOpen(false); // Close mobile menu
                          setActiveSubMenu(null); // Close sub-menu
                        }}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
