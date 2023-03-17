import React from "react";
import {Link} from "react-router-dom";

const Orders = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <div className="mt-3 text-center col-12 alert alert-info">
        No orders
        <Link to="/" className="px-3 py-2 mx-2 btn btn-success" style={{fontSize: '12px'}}>
            START SHOPPING
        </Link>
      </div> */}

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>STATUS</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr className={`alert-success`}>
              <td>
                <Link to="/" className="link">
                  1
                </Link>
              </td>
              <td>Paid</td>
              <td>Dec 12 2022</td>
              <td>$234</td>
            </tr>
            {/* Cancelled */}
            <tr className={`alert-danger`}>
              <td>
                <Link to="/" className="link">
                  2
                </Link>
              </td>
              <td>Not Paid</td>
              <td>Dec 12 2022</td>
              <td>$321</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
