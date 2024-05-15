import { useEffect, useState } from "react";
import Menu from "../components/Menu.js";
import "./dashboard.css";
import { auth, db } from "../Firebase-config";
import {
  getDoc,
  doc,
  getDocs,
  collection,
  getCountFromServer,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { async } from "@firebase/util";

function Dashboard() {
  const [student, setStudent] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [Query, setQuery] = useState([]);
  const [StdCount, setStdCount] = useState(0);
  const [TeachCount, setTeachCount] = useState(0);
  const [QueryCount, setQueryCount] = useState(0);

  const fetchStudent = async () => {
    try {
      const getstd = await getDocs(collection(db, "Users"));
      setStudent(getstd.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      const getthr = await getDocs(collection(db, "teachers"));
      setTeacher(getthr.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      const getque = await getDocs(collection(db, "Query"));
      setQuery(getque.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(error.message);
    }
  };

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  useEffect(() => {
    fetchStudent();
  }, []);

  useEffect(() => {
    const fetchDocCount = async () => {
      try {
        const querySnapshot1 = await getDocs(collection(db, "Users"));
        setStdCount(querySnapshot1.size);
        const querySnapshot2 = await getDocs(collection(db, "teachers"));
        setTeachCount(querySnapshot2.size);
        const querySnapshot3 = await getDocs(collection(db, "Query"));
        setQueryCount(querySnapshot3.size);
      } catch (error) {
        console.error("Error fetching document count: ", error);
      }
    };
    fetchDocCount();
  }, []);

  return (
    <>
      <Menu></Menu>
      <div class="side-menu">
        <div class="brand-name">
          <h1 style={{ marginLeft: "2rem" }}>Acharya Abacus Classes</h1>
        </div>
        <ul>
          <a className="link-go" href="#">
            <li>
              <img
                src={require("../assets/images/dashboard.gif")}
                alt=""
                style={{
                  width: "10%",
                  borderRadius: "50%",
                }}
              />
              &nbsp; <span>Dashboard</span>{" "}
            </li>
          </a>
          <a className="link-go" href="#std-rqst">
            <li>
              <img
                src={require("../assets/images/notification.gif")}
                alt=""
                style={{
                  width: "10%",
                  borderRadius: "50%",
                }}
              />
              &nbsp;<span>Admission Requests</span>{" "}
            </li>
          </a>
          <a className="link-go" href="#teach_rqst">
            <li>
              <img
                src={require("../assets/images/message.gif")}
                alt=""
                style={{
                  width: "10%",
                  borderRadius: "50%",
                }}
              />
              &nbsp;<span>Teachers Requests</span>{" "}
            </li>
          </a>
          <a className="link-go" href="#user_query">
            <li>
              <img
                src={require("../assets/images/faq.gif")}
                alt=""
                style={{
                  width: "10%",
                  borderRadius: "50%",
                }}
              />
              &nbsp;<span>User Queries</span>{" "}
            </li>
          </a>
        </ul>
        <input
          type="button"
          value="Logout"
          className="btn logout"
          style={{
            padding: "1px 1px ",
            marginTop: "2rem",
            width: "50%",
            height: "4rem",
            fontSize: "1rem",
          }}
          onClick={handleLogout}
        />
      </div>
      <div class="container-dashboard">
        <div class="content">
          <div class="dash-cards">
            <div class="card-d">
              <div class="box-d">
                <h1>{StdCount}</h1>
                <h3>Students</h3>
              </div>
            </div>
            <div class="card-d">
              <div class="box-d">
                <h1>{TeachCount}</h1>
                <h3>Teachers</h3>
              </div>
            </div>
            <div class="card-d">
              <div class="box-d">
                <h1>{QueryCount}</h1>
                <h3>Queries</h3>
              </div>
            </div>
            <div class="card-d">
              <div class="box-d">
                <h1>3</h1>
                <h3>Admitted</h3>
              </div>
            </div>
          </div>

          <div class="content-2" id="std-rqst">
            <div class="new-students">
              <div class="title">
                <h2>Student Requests</h2>
              </div>
              <div className="scroll-info">
                <table>
                  <tr>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>DOB</th>
                    <th>Gender</th>
                  </tr>
                  {student.map((doc, index) => {
                    return (
                      <tr key={doc.id}>
                        <td>{index + 1}</td>
                        <td>{doc.name}</td>
                        <td>{doc.email}</td>
                        <td>{doc.phone}</td>
                        <td>{doc.dob}</td>
                        <td>{doc.gender}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
          <div class="content-2" id="teach_rqst">
            <div class="new-students">
              <div class="title">
                <h2>Teacher Requests</h2>
              </div>
              <div className="scroll-info">
                <table>
                  <tr>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th>EmailId</th>
                    <th>Phone</th>
                    <th>Institute</th>
                  </tr>
                  {teacher.map((doc, index) => {
                    return (
                      <tr key={doc.id}>
                        <td>{index + 1}</td>
                        <td>{doc.name}</td>
                        <td>{doc.email}</td>
                        <td>{doc.phone}</td>
                        <td>{doc.institute}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
          <div class="content-2" id="user_query">
            <div class="new-students">
              <div class="title">
                <h2>User Queries</h2>
              </div>
              <div className="scroll-info">
                <table>
                  <tr>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th>EmailId</th>
                    <th>Message</th>
                  </tr>
                  {Query.map((doc, index) => {
                    return (
                      <tr key={doc.id}>
                        <td>{index + 1}</td>
                        <td>{doc.name}</td>
                        <td>{doc.email}</td>
                        <td>
                          <textarea
                            disabled
                            style={{
                              border: "none",
                              padding: "2px 10px",
                              backgroundColor: "white",
                            }}
                          >
                            {doc.msg}
                          </textarea>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
