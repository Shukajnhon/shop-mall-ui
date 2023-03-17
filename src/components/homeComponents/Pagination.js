import React from "react";
import {Link} from "react-router-dom";

const Pagination = () => {
  return (
    <nav>
      <ul className="pagination justify-center">
        <li className={`page-item active`}>
          <Link className="page-link" to={"#"}></Link>
        </li>
        <li className={`page-item`}>
          <Link className="page-link" to={"#"}></Link>
        </li>
        <li className={`page-item`}>
          <Link className="page-link" to={"#"}></Link>
        </li>
        <li className={`page-item`}>
          <Link className="page-link" to={"#"}></Link>
        </li>
        <li className={`page-item`}>
          <Link className="page-link" to={"#"}></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
