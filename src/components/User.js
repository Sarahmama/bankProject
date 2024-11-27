import React from "react";
import profileImg from "../images/profile-user.png";
function User({ username, balance }) {
  return (
    <div className=" ">
      <div className="user-container">
        <div className="container  py-5 ">
          <div className="mb-5 ">
            <img
              className="rounded-5"
              src={profileImg}
              width="100px"
              alt="User Profile"
            />{" "}
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <h3>Username: </h3>
            </div>
            <div className="col-6">
              <h3 className="">{username} </h3>
            </div>

            <div className="row">
              <div className="col-6">
                <h3>Balance: </h3>
              </div>
              <div className="col-6  text-center d-flex ">
                <h3>
                  <label className="">{balance} </label>
                  <label className="mx-3  text-color">KWD</label>{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
