import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { logo } from "../../assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import Avatar from "../Avatar/Avatar";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <nav className="w-full flex justify-between bg-white py-3 px-5 border-b-2 font-main font-semibold text-base flex-wrap sm:flex-nowrap">
      <div className="pr-4 sm:border-r-2 flex justify-center">
        <img src={logo} alt="" />
      </div>
      <div
        className="sm:hidden flex justify-end"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <FaXmark className="bg-pink w-10 h-10 text-white rounded-xl p-2" />
        ) : (
          <GiHamburgerMenu className="bg-pink w-10 h-10 text-white rounded-xl p-2" />
        )}
      </div>

      <div className="w-full sm:w-auto sm:px-4">
        <ul
          className={`${
            open ? "flex flex-col" : "hidden sm:flex"
          } w-full sm:w-auto gap-1 sm:gap-4 sm:flex sm:justify-end`}
        >
          <li className="leading-10">
            <NavLink
              to="/admin/dasboard"
              className={`block sm:inline w-full sm:w-auto ${
                isActive("/admin/dasboard")
                  ? "bg-pinkshadow rounded-xl text-pink pl-2 p-0 sm:p-4"
                  : "bg-transparent text-black pl-2 sm:pl-0 sm:hover:p-4 hover:rounded-xl hover:bg-pinkshadow hover:text-pinkungu"
              }`}
            >
              Dasboard
            </NavLink>
          </li>
          <li className="leading-10">
            <NavLink
              to="/admin/kandidat"
              className={`block sm:inline w-full sm:w-auto ${
                isActive("/admin/kandidat")
                  ? "bg-pinkshadow rounded-xl text-pink pl-2 p-0 sm:p-4"
                  : "bg-transparent text-black pl-2 sm:pl-0 sm:hover:p-4 hover:rounded-xl hover:bg-pinkshadow hover:text-pinkungu"
              }`}
            >
              Kandidat
            </NavLink>
          </li>
          <li className="leading-10">
            <NavLink
              to="/admin/pemilih"
              className={`block sm:inline w-full sm:w-auto ${
                isActive("/admin/pemilih")
                  ? "bg-pinkshadow rounded-xl text-pink pl-2 p-0 sm:p-4"
                  : "bg-transparent text-black pl-2 sm:pl-0 sm:hover:p-4 hover:rounded-xl hover:bg-pinkshadow hover:text-pinkungu"
              }`}
            >
              Pemilih
            </NavLink>
          </li>
          <li className="leading-10">
            <NavLink
              to="/admin/laporan"
              className={`block sm:inline w-full sm:w-auto ${
                isActive("/admin/laporan")
                  ? "bg-pinkshadow rounded-xl text-pink pl-2 p-0 sm:p-4"
                  : "bg-transparent text-black pl-2 sm:pl-0 sm:hover:p-4 hover:rounded-xl hover:bg-pinkshadow hover:text-pinkungu"
              }`}
            >
              Laporan
            </NavLink>
          </li>
          <li className="leading-10">
            <NavLink
              to="/admin/profil"
              className={`block sm:inline w-full sm:w-auto ${
                isActive("/admin/profil")
                  ? "bg-pinkshadow rounded-xl text-pink pl-2 p-0 sm:p-4"
                  : "bg-transparent text-black pl-2 sm:pl-0 sm:hover:p-4 hover:rounded-xl hover:bg-pinkshadow hover:text-pinkungu"
              }`}
            >
              <Avatar/>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
