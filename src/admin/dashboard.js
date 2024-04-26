import { useEffect, useState } from "react";
import Menu from "../components/Menu.js";
import "./dashboard.css";

function Dashboard() {
  return (
    <>
      <Menu></Menu>
      <div class="side-menu">
        <div class="brand-name">
          <h1>Acharya Abacus Classes</h1>
        </div>
        <ul>
          <li>
            <img src="dashboard (2).png" alt="" />
            &nbsp; <span>Dashboard</span>{" "}
          </li>
          <li>
            <img src="reading-book (1).png" alt="" />
            &nbsp;<span>Admission Requests</span>{" "}
          </li>
          <li>
            <img src="teacher2.png" alt="" />
            &nbsp;<span>Teachers Requests</span>{" "}
          </li>
          <li>
            <img src="school.png" alt="" />
            &nbsp;<span>Add Users</span>{" "}
          </li>
          <li>
            <img src="payment.png" alt="" />
            &nbsp;<span>Content Manager</span>{" "}
          </li>
        </ul>
      </div>
      <div class="container-dashboard">
        <div class="content">
          <div class="dash-cards">
            <div class="card-d">
              <div class="box-d">
                <h1>2194</h1>
                <h3>Students</h3>
              </div>
            </div>
            <div class="card-d">
              <div class="box-d">
                <h1>53</h1>
                <h3>Teachers</h3>
              </div>
            </div>
            <div class="card-d">
              <div class="box-d">
                <h1>5</h1>
                <h3>Schools</h3>
              </div>
            </div>
            <div class="card-d">
              <div class="box-d">
                <h1>35000</h1>
                <h3>Income</h3>
              </div>
            </div>
          </div>
          <div class="content-2">
            {/* <div class="recent-payments">
              <div class="title">
                <h2>Recent Payments</h2>
                <a href="#" class="btn">
                  View All
                </a>
              </div>
              <table>
                <tr>
                  <th>Name</th>
                  <th>School</th>
                  <th>Amount</th>
                  <th>Option</th>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>St. James College</td>
                  <td>$120</td>
                  <td>
                    <a href="#" class="btn">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>St. James College</td>
                  <td>$120</td>
                  <td>
                    <a href="#" class="btn">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>St. James College</td>
                  <td>$120</td>
                  <td>
                    <a href="#" class="btn">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>St. James College</td>
                  <td>$120</td>
                  <td>
                    <a href="#" class="btn">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>St. James College</td>
                  <td>$120</td>
                  <td>
                    <a href="#" class="btn">
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>St. James College</td>
                  <td>$120</td>
                  <td>
                    <a href="#" class="btn">
                      View
                    </a>
                  </td>
                </tr>
              </table>
            </div> */}
            <div class="new-students">
              <div class="title">
                <h2>Register Students</h2>
              </div>
              <table>
                <tr>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>EmailId</th>
                  <th>Phone</th>
                  <th>Gender</th>
                </tr>
                <tr>
                  <td>
                    <img src="user.png" alt="" />
                  </td>
                  <td>John Steve Doe</td>
                  <td>jhon@gmail.com</td>
                  <td>9654215361</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td>
                    <img src="user.png" alt="" />
                  </td>
                  <td>John Steve Doe</td>
                  <td>jhon@gmail.com</td>
                  <td>9654215361</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td>
                    <img src="user.png" alt="" />
                  </td>
                  <td>John Steve Doe</td>
                  <td>jhon@gmail.com</td>
                  <td>9654215361</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td>
                    <img src="user.png" alt="" />
                  </td>
                  <td>John Steve Doe</td>
                  <td>jhon@gmail.com</td>
                  <td>9654215361</td>
                  <td>Male</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
