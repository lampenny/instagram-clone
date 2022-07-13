import { useEffect } from "react";
import PropTypes from "prop-types";
import LoggedInUserContext from "../context/loggedin-user";
import Header from "../components/Header";
import Sidebar from "../components/sidebar/index";
import Timeline from "../components/Timeline";
import useUser from "../hooks/useUser";

export default function Dashboard() {
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}
