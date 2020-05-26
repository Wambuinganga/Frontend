import React, {useState} from 'react'

export const ViewAccounts = () => {
    return (
        <div className="container mt-5">
      <h2>View All Accounts</h2>
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name </th>
            <th scope="col">Bio</th>
            <th scope="col">Location</th>
            <th scope="col">Birth date</th>
          </tr>
        </thead>
        <tbody>
    
        </tbody>
      </table>
      <button className="btn btn-outline-success my-2 my-sm-0 mt-5 mr-5">
        {" "}
        Edit {" "}
      </button>
      <button className="btn btn-outline-success my-2 my-sm-0  mt-5">
        {" "}
        Update {" "}
      </button>
    </div>
    )
}