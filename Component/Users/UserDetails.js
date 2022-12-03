import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SideBar from  '../SideBar'

import userDetails from "../../pages/userDetails/[uid]";

const UserDetails = (props) => {
  const [userData, setUserData] = useState();
  console.log(props.props.id, "to check whethers props are working or not");

  async function getUsers() {
    try {
      const token = localStorage.getItem("token");
      let res = await axios.post("/api/users/getUsers", { token: token });
      const response = res.data;
      console.log(response.data, "to get the response from api to get users");
      const filteredData = response.data.filter((item) => {
        const userData = item?.id;
        return userData == props.props.id;
      });
      console.log(
        ...filteredData,
        "to check whether the data is fetched or not"
      );
      setUserData(...filteredData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="new-dashboard">
        <SideBar />

        <section className="forself profile-sects">
          <div className="container">
            <div className="self-main">
              <div className="self-main-head">
                <h3>Profile created for Self</h3>
              </div>
              <div className="left-main-box" id="left-main-box">
                <div className="box-img">
                  <img
                    className="user-image"
                    src={userData?.avatar || "/img/box-img.png"}
                    alt=""
                  />
                </div>
                <div className="box-text">
                  <div className="box-text-one">
                    <h2>{userData?.name}</h2>
                    <div className="flex-box-one">
                      <ul>
                        <li>Age</li>
                        <li>
                          <b>{userData?.age}</b>{" "}
                        </li>
                      </ul>
                    </div>

                    <div className="flex-box-one">
                      <ul>
                        <li>Gender</li>
                        <li>
                          <b>{userData?.gender}</b>{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="flex-box-one">
                      <ul>
                        <li>Profession</li>
                        <li>
                          <b>{userData?.profession}</b>{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="flex-box-one">
                      <ul>
                        <li> City,State, Country</li>
                        <li>
                          <b>{userData?.city} {" "} {userData?.state} {" "} {userData?.country}</b>{" "}
                        </li>
                      </ul>
                    </div>
                    <div className="flex-box-one">
                      <ul>
                        <li>Degree</li>

                        <li>
                          <b>{userData?.degree}</b>{" "}
                        </li>
                      </ul>
                    </div>

                    <div className="flex-box-one">
                      <ul>
                        <li>Work</li>

                        <li>
                          <b>{userData?.work}</b>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-text-two" id="forself-two">
                    <div className="forself-two-inner">
                      <h4>Contact Details</h4>
                      <ul className="two-inner1-ul">
                        <li>Contact </li>
                        <li>
                          <div className="input-group mb-3">
                            <span className="form-control">{userData?.phone.slice(0,3)} *****{userData?.phone.slice(-2)}</span>
                          </div>
                        </li>
                      </ul>
                      <ul className="two-inner2-ul">
                        <li>Email</li>
                        <li>
                          <div className="input-group mb-3">
                            <span className="form-control">{userData?.email}</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <a href="" className="like-btn2">
                      Request contacted{" "}
                    </a>
                  </div>

                  <div className="boxthree">
                    {/* <p>I am looking for a suitalbe partner. I have completed my gratuation in From USA
                                univercity</p> */}
                    <p>hello</p>
                  </div>
                </div>
              </div>

              <div className="self-about">
                <div className="self-about-main">
                  <div className="self-about-left">
                    <ul>
                      <li>Mother Tongue</li>
                      <li>
                        <b>{userData?.motherTongue}</b>
                      </li>
                    </ul>

                    <ul>
                      <li> Marital Status</li>
                      <li>
                        <b>{userData?.maritalStatus}</b>
                      </li>
                    </ul>

                    <ul>
                      <li> Height</li>
                      <li>
                        <b>{userData?.height}</b>
                      </li>
                    </ul>

                    <ul>
                      <li> Weight</li>
                      <li>
                        <b>{userData?.weight}</b>
                      </li>
                    </ul>
                  </div>
                  <div className="self-about-right">
                    <h3>About hello</h3>
                    <p>hello</p>
                  </div>
                </div>

                {/* <section className="reference">
                  <div className="reference-head">
                    <h3>Reference</h3>
                  </div>
                  <div className="main-reference">
                    <div className="reference-box">
                      <ul>
                        <li>Name</li>
                        <li>
                          <b style={{ fontWeight: "500" }}>hello </b>
                        </li>
                      </ul>

                      <ul>
                        <li>Email</li>
                        <li>
                          <b style={{ fontWeight: "500" }}>hello</b>
                        </li>
                      </ul>

                      <ul>
                        <li> Phone</li>
                        <li>
                          <b style={{ fontWeight: "500" }}> hello</b>
                        </li>
                      </ul>
                    </div>
                    
                  </div>
                </section> */}

                {/* <div className="self-about-main">
                  <div className="self-about-left">
                    <h3>Parish</h3>
                    <ul>
                      <li>Name</li>
                      <li>
                        <b>hello12</b>
                      </li>
                    </ul>

                    <ul>
                      <li>City</li>
                      <li>
                        <b> helloo233</b>
                      </li>
                    </ul>
                  </div>
                  <div className="self-about-right">
                    <h3>Wishlist</h3>
                    <p>hii here</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserDetails;