import {Link} from "react-router-dom";
import React from "react";

import '../../styles/navigation.css';

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/timesheet">Timesheet</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation;
